import React from "react";
import Logo from '../../../Logos-icons/logo.webp'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return(
    <main className="footer" id="Footer">
      <section className="sectionContainer container grid">
        <div className="gridOne">
          <picture className="logoDiv">
            <img src={Logo} alt="Logo" className="LOGO" />
          </picture>
          <p>Your mind should be stronger than tour feelings, Fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <ul>
            <li>
              <a href="Home" className="link">Home</a>
            </li>
            <li>
              <a href="" className="link">Explore</a>
            </li>
            <li>
              <a href="" className="link">Flight Status</a>
            </li>
            <li>
              <a href="" className="link">Travel</a>
            </li>
            <li>
              <a href="" className="link">Check-In</a>
            </li>
            <li>
              <a href="" className="link">Manage your booking</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="" className="link">FAQ</a>
          </li>
          <li>
            <a href="" className="link">How to</a>
          </li>
          <li>
            <a href="" className="link">Features</a>
          </li>
          <li>
            <a href="" className="link">Baggage</a>
          </li>
          <li>
            <a href="" className="link">Rout Map</a>
          </li>
          <li>
            <a href="" className="link">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="" className="link">Chauffeur</a>
          </li>
          <li>
            <a href="" className="link">Our partners</a>
          </li>
          <li>
            <a href="" className="link">Destination</a>
          </li>
          <li>
            <a href="" className="link">Careers</a>
          </li>
          <li>
            <a href="" className="link">Transportation</a>
          </li>
          <li>
            <a href="" className="link">Programme Rules</a>
          </li>
        </div>

        <div className="copyRightDiv flex">
          <p>Developed by <a href="https://capable-pithivier-f8fd29.netlify.app/" target="_black">Santiago Silva</a> </p>
          <p>This website was made for Education purposes, none of the content shown is real</p>
        </div>
      </section>
    </main>
  )
}

export {Footer}