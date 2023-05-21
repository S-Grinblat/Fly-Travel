import React, {useState} from "react";
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../../Logos-icons/logo.webp'
import { DropdownMenu } from "./users/userMenu";
const Navbar = () => {

  const [active, setActive] = useState('navBarMenu')

  const showNavBar = ()=> {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  const [noBg, addBg] = useState('navBarTwo')

  const addBgColor = () => {
    if(window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg')
    } else {
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addBgColor)

  return(
    <main className="navBar flex">

      <section className="navBarOne flex">

        <ul className="none ">
          <li className="flex"> <BsPhoneVibrate className="icon"/> Support</li>
          <li className="flex"> <AiOutlineGlobal className="icon" /> Languages</li>
        </ul>

        <DropdownMenu/>
      </section>

      <section className={noBg}>
        <picture className="logoDiv">
          <img src={logo} alt="Logo Empresa" className="Logo" />
        </picture>

        <div className={active}>
          <div className="menu">
            <a onClick={removeNavBar} href="#Home" className="listItem">Home</a>
            <a onClick={removeNavBar} href="#Search" className="listItem">Search</a>
            <a onClick={removeNavBar} href="#Support" className="listItem">Support</a>
            <a onClick={removeNavBar} href="#Info" className="listItem">Info</a>
            <a onClick={removeNavBar} href="#Lounge" className="listItem">Lounge</a>
            <a onClick={removeNavBar} href="#Destination" className="listItem">Destination</a>
            <a onClick={removeNavBar} href="#Footer" className="btn flex btnOne">Contact</a>
            <button className="btn flex btnTwo">Contact</button>
          </div>
        </div>

        <div onClick= {showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon"/> 
        </div>
      </section>
    </main>
  )
}

export {Navbar}