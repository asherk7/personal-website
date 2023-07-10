import React, {useState, useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {LiaBrainSolid} from 'react-icons/lia'
import {VscTools} from 'react-icons/vsc'
import {MdWork} from 'react-icons/md'
import './nav.css'

const Nav = () => {
  const [nav, setNav] = useState("#home");

  async function changeNav(e) {
    setNav(e.currentTarget.getAttribute("href"));
  }

  /* this code checks what section the page is on, and adjusts the navbar accordingly */

  useEffect(() => {
    let section = document.querySelectorAll("section");
    window.onscroll = () => {
      section.forEach(area => {
        let top = window.scrollY;
        let offset = area.offsetTop-75;
        let height = area.offsetHeight
        let id = area.getAttribute("id");
  
        if (top >= offset && top < offset + height) {
          setNav("#" + id);
          //setnav is a promise, so we need to wait for it to finish before we can use it
          //we need to make it so that page refreshes or something
          //also edit values so that it changes immediately (height)
        }
      })
    };
  }, [nav]);

  return (
    <nav>
      <a onClick={changeNav} className={nav === "#home" ? "currentview" : ""} href="#home"><AiOutlineHome /></a>
      <a onClick={changeNav} className={nav === "#about" ? "currentview" : ""} href="#about"><AiOutlineUser /></a>
      <a onClick={changeNav} className={nav === "#skills" ? "currentview" : ""} href="#skills"><VscTools /></a>
      <a onClick={changeNav} className={nav === "#projects" ? "currentview" : ""} href="#projects"><LiaBrainSolid /></a>
      <a onClick={changeNav} className={nav === "#experience" ? "currentview" : ""} href="#experience"><MdWork /></a>
      <a onClick={changeNav} className={nav === "#contact" ? "currentview" : ""} href="#contact"><RiContactsFill /></a>
    </nav>
  )
}

export default Nav