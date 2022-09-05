import React, { useContext } from 'react';
import LOGO from '../../images/LOGO.png';
import { RiMenuLine, RiMenuUnfoldFill } from 'react-icons/ri'
import './Header.css'
import { Link } from 'react-router-dom';
import TractianContext from '../../context/TractianContext';

function Header() {
  const { showSideBar, setShowSideBar, userLogged } = useContext(TractianContext);
  const { unit } = userLogged;
  return (
    <header className='display-flex'>
      { !(Object.keys(userLogged).length === 0)
          ? <Link to={ `/${unit}` }>
              <img src={ LOGO } alt="Tractian-Logo"/>
            </Link>
          : <img src={ LOGO } alt="Tractian-Logo"/>
        
      }
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