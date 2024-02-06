import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
const Header = ({ onMenuClick }) => {
  return (
    <>
      <header className='appBar'>
        <FontAwesomeIcon icon={faBars} onClick={onMenuClick}  className='menuIcon'/>
        <p>Hospital Management System</p>
      </header>
    </>
  )
}

export default Header
