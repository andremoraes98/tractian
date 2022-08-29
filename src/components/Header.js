import React from 'react';
import LOGO from '../images/LOGO.png';
import { AiOutlineMenu } from 'react-icons/ai'
import './Header.css'

function Header() {
  return (
    <header className='display-flex'>
      <img src={ LOGO }/>
      <AiOutlineMenu />
    </header>
  );
}

export default Header;