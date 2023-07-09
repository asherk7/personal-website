import React from 'react'
import HeaderContact from '../header/HeaderContact'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container-left">
        <HeaderContact />
      </div>
      <div className="container-right">
        <h2> Copyright © Asher Khan</h2>
      </div>
    </footer>
  )
}

export default Footer