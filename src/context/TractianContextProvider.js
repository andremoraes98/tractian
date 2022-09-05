import React, { useState } from 'react';
import TractianContext from './TractianContext';
import PropTypes from 'prop-types';

function TractianContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userLogged, setUserLogged] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [assetInfo, setAssetInfo] = useState({});
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showTemperatureGraphic, setShowTemperatureGraphic] = useState(false);
  const [showEnergyGraphic, setShowEnergyGraphic] = useState(false);
  const [showVibrationGraphic, setShowVibrationGraphic] = useState(false);
  

  const toggleConfirmMessage = (message, willConfirmMessageShow) => {
    setShowConfirmMessage(willConfirmMessageShow);
    setConfirmMessage(message);
  };

  const getAssetsFromUnit = async (unit) => {
    setIsLoading(true);
    const response = await fetch(`https://tractian-bc.herokuapp.com/aset/${unit}`);
    const data = await response.json();
    setAssets(data);
    setIsLoading(false);
  };

  const createAsset = async (asset) => {
    try {
      await fetch('https://tractian-bc.herokuapp.com/aset', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(asset),
      });
    } catch(e) {
      console.log(e.message)
    }
  };

  const deleteAsset = async (id) => {
    try {
      await fetch(`https://tractian-bc.herokuapp.com/aset/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch(e) {
      console.log(e.message)
    }
  }

  const updateAsset = async (id, asset) => {
    try {
      await fetch(`https://tractian-bc.herokuapp.com/aset/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(asset),
      });
    } catch(e) {
      console.log(e.message)
    }
  };

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://tractian-bc.herokuapp.com/user');
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  const context = {
    users,
    getUsers,
    userLogged,
    setUserLogged,
    showSideBar,
    setShowSideBar,
    assetInfo,
    setAssetInfo,
    showConfirmMessage,
    confirmMessage,
    setShowConfirmMessage,
    toggleConfirmMessage,
    assets,
    getAssetsFromUnit,
    createAsset,
    deleteAsset,
    updateAsset,
    isLoading,
    setIsLoading,
    showAlertMessage,
    setShowAlertMessage,
    showDeleteMessage,
    setShowDeleteMessage,
    showTemperatureGraphic,
    setShowTemperatureGraphic,
    showEnergyGraphic,
    setShowEnergyGraphic,
    showVibrationGraphic,
    setShowVibrationGraphic,
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