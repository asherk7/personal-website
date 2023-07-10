import React from 'react'
import HeaderContact from '../header/HeaderContact'
import logo from '../../resources/favicon.ico'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container-left">
        <HeaderContact />
      </div>
      <div className="container-right">
        <img src={logo} alt="logo" />
        <h2> Copyright © Asher Khan</h2>
      </div>
    </footer>
  )
}

export default Footer