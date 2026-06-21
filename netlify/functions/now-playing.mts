// Server-side Spotify "now playing" proxy.
// Secrets stay here and never reach the browser bundle.
// Env vars (set in Netlify, NOT prefixed with VITE_):
//   SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }).toString(),
  })

  // invalid_grant here means the refresh token expired (Spotify's 6-month policy)
  // or was revoked. Surface it so the caller can degrade gracefully.
  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Spotify token refresh failed (${response.status}): ${detail}`)
  }

  const data = await response.json()
  return data.access_token as string
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      // Cache at the CDN edge so we don't hit Spotify on every page load.
      'Cache-Control': 'public, max-age=0, s-maxage=30',
    },
  })
}

export default async () => {
  if (!client_id || !client_secret || !refresh_token)
    return json({ error: 'Spotify env vars not configured' }, 500)

  let access_token: string
  try {
    access_token = await getAccessToken()
  }
  catch (err) {
    // Refresh token expired/revoked, or Spotify is down — hide the widget quietly.
    console.error('[now-playing]', err)
    return json(null)
  }

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  if (response.status === 204 || response.status >= 400)
    return json(null)

  const song = await response.json()
  if (!song?.item)
    return json(null)

  return json({
    albumImageUrl: song.item.album.images[0].url,
    artist: song.item.artists.map((a: any) => a.name).join(', '),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name,
  })
}
