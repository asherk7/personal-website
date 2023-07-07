import React, {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {LiaBrainSolid} from 'react-icons/lia'
import {VscTools} from 'react-icons/vsc'
import './nav.css'

const Nav = () => {
  const [nav, setNav] = useState("#home")

  async function changeNav(e) {
    setNav(e.currentTarget.getAttribute("href"));
  }

  return (
    <nav>
      <a onClick={changeNav} className={nav === "#home" ? "currentview" : ""} href="#home"><AiOutlineHome /></a>
      <a onClick={changeNav} className={nav === "#about" ? "currentview" : ""} href="#about"><AiOutlineUser /></a>
      <a onClick={changeNav} className={nav === "#skills" ? "currentview" : ""} href="#skills"><VscTools /></a>
      <a onClick={changeNav} className={nav === "#projects" ? "currentview" : ""} href="#projects"><LiaBrainSolid /></a>
      <a onClick={changeNav} className={nav === "#contact" ? "currentview" : ""} href="#contact"><RiContactsFill /></a>
    </nav>
  )
}

export default Nav