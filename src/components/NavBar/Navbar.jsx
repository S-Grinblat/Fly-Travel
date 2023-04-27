import React, {useState} from "react";
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../../Logos-icons/logo.webp'

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
        <div>
          <SiConsul className="icon"/>
        </div>

        <ul className="none ">
          <li className="flex"> <BsPhoneVibrate className="icon"/> Support</li>
          <li className="flex"> <AiOutlineGlobal className="icon" /> Languages</li>
        </ul>

        <div className="atb flex">
          <span className="atb-span">Sing In</span>
          <span className="atb-span">Sing Out</span>
        </div>
      </section>

      <section className={noBg}>
        <picture className="logoDiv">
          <img src={logo} alt="Logo Empresa" className="Logo" />
        </picture>

        <div className={active}>
          <ul className="menu">
            <li  onClick={removeNavBar} className="listItem">Home</li>
            <li  onClick={removeNavBar} className="listItem">About</li>
            <li  onClick={removeNavBar} className="listItem">Offers</li>
            <li  onClick={removeNavBar} className="listItem">Seats</li>
            <li  onClick={removeNavBar} className="listItem">Destination</li>
            <button  onClick={removeNavBar} className="btn flex btnOne">Contact</button>
            <button className="btn flex btnTwo">Contact</button>
          </ul>
        </div>

        <div onClick= {showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon"/> 
        </div>
      </section>
    </main>
  )
}

export {Navbar}