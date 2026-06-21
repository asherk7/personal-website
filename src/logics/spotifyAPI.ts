// Calls our own Netlify Function instead of Spotify directly, so the
// client_secret and refresh_token never ship in the public bundle.
// See netlify/functions/now-playing.mts
const NOW_PLAYING_ENDPOINT = '/.netlify/functions/now-playing'

export async function getNowPlaying() {
  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT)
    if (!response.ok)
      return null
    // Function returns the track object, or `null` when nothing is playing.
    return await response.json()
  }
  catch {
    return null
  }
}
