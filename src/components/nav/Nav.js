import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {LiaBrainSolid} from 'react-icons/lia'
import {VscTools} from 'react-icons/vsc'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#skills"><VscTools /></a>
      <a href="#projects"><LiaBrainSolid /></a>
      <a href="#contact"><RiContactsFill /></a>
    </nav>
  )
}

export default Nav