import React from 'react';
import LOGO from '../../images/LOGO.png';
import { AiOutlineMenu } from 'react-icons/ai'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='display-flex'>
      <Link to="/">
        <img src={ LOGO }/>
      </Link>
      <AiOutlineMenu />
    </header>
  );
}

export default Header;