import React from 'react'
import me from '../../resources/asher_khan.png'
import HeaderContact from './HeaderContact'
import './header.css'

const Header = () => {
  return (
    <header>
      <section id="home">
        <div className='container header-container'>
          <div className="me">
            <img src={me} alt="Asher Khan" />
          </div>

          <h1>Asher Khan</h1>
          <h5 className="text-light">Software Engineering Student</h5>

          <HeaderContact />

          <a href="#about" className="btn btn-primary scroll">Enter Portfolio</a>
        </div>
      </section>
    </header>
  )
}

export default Header