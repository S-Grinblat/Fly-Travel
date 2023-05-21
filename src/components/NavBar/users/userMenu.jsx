import React, { useState } from 'react';
import {FaUserCircle} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = () => {
    setIsOpen(false);
  }

  return (
    <div className="atb">
      <button className="atb-button__container" >
        <FaUserCircle className="abt-button__icon" title="User"/>
        <GiHamburgerMenu onClick={toggleMenu} className="abt-button__icon" title="Menu"/>
      </button>
      {isOpen && (
        <ul className='atb-span__container'>
          <li className='atb-span' onClick={() => handleOptionClick('Sign In')}>Sign In</li>
          <br></br>
          <li className='atb-span' onClick={() => handleOptionClick('Sign Out')}>Sign Out</li>
        </ul>
      )}
    </div>
  )
}