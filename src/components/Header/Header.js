import React, { useContext } from 'react';
import LOGO from '../../images/LOGO.png';
import { RiMenuLine, RiMenuUnfoldFill } from 'react-icons/ri'
import './Header.css'
import { Link } from 'react-router-dom';
import TractianContext from '../../context/TractianContext';

function Header() {
  const { showSideBar, setShowSideBar } = useContext(TractianContext);
  return (
    <header className='display-flex'>
      <Link to="/">
        <img src={ LOGO }/>
      </Link>
      {
        showSideBar
          ? <RiMenuUnfoldFill
            onClick={ () => setShowSideBar(!showSideBar) }
          />
          : <RiMenuLine
            onClick={ () => setShowSideBar(!showSideBar) }
          />
      }
    </header>
  );
}

export default Header;