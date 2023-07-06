import React from 'react'
import './header.css'
import me from '../../resources/asher_khan.png'
import HeaderContact from './HeaderContact'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <div className="me">
          <img src={me} alt="Asher Khan" />
        </div>

        <h1>Asher Khan</h1>
        <h5 className="text-light">Software Engineering student - aspiring Machine Learning Engineer</h5>

        <HeaderContact />
      </div>
    </header>
  )
}

export default Header