import React, { useContext } from 'react';
import TractianContext from '../../context/TractianContext';
import SideBarContent from './SideBarContent';
import './SideBar.css';

function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(TractianContext);
  return (
    showSideBar &&
    <div>
      <div
        id="focus"
        onClick={ () => setShowSideBar(!showSideBar)}
      ></div>
      <SideBarContent />
    </div>
  )
}

export default SideBar;
