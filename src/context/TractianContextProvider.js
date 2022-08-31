import React, { useState } from 'react';
import TractianContext from './TractianContext';
import PropTypes from 'prop-types';

function TractianContextProvider({ children }) {
  const [industryName, setIndustryName] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);
  const [assetInfo, setAssetInfo] = useState({});
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');

  const toggleConfirmMessage = (message, willConfirmMessageShow) => {
    setShowConfirmMessage(willConfirmMessageShow);
    setConfirmMessage(message);
  }

  const context = {
    industryName,
    setIndustryName,
    showSideBar,
    setShowSideBar,
    assetInfo,
    setAssetInfo,
    showConfirmMessage,
    confirmMessage,
    toggleConfirmMessage,
  };

  return(
    <TractianContext.Provider value={ context }>
      { children }
    </TractianContext.Provider>
  )
}

TractianContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TractianContextProvider