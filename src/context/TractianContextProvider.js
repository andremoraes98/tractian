import React, { useState } from 'react';
import TractianContext from './TractianContext';
import PropTypes from 'prop-types';

function TractianContextProvider({ children }) {
  const [industryName, setIndustryName] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);
  const [assetInfo, setAssetInfo] = useState({});
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const toggleConfirmMessage = (message, willConfirmMessageShow) => {
    setShowConfirmMessage(willConfirmMessageShow);
    setConfirmMessage(message);
  };

  const getAssets = () => {
    setIsLoading(true);
    setAssets([
      {
        id: 1,
        name: 'TM103',
        model: 'Siemens',
        owner: 'Industria Freios Supremos 1',
        status: 'Running',
        helthLevel: '90',
        image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:4eeebb1d-1ae3-4103-99e2-d8d63a1776e6/width:1125/quality:high/simotics-gp-vsd-10-line.png',
        energy: [],
        temp: [],
        vibration: [],
      },
      {
        id: 2,
        name: 'SL203',
        model: 'Siemens',
        owner: 'Industria Freios Supremos 1',
        status: 'Running',
        helthLevel: '90',
        image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:4eeebb1d-1ae3-4103-99e2-d8d63a1776e6/width:1125/quality:high/simotics-gp-vsd-10-line.png',
        energy: [],
        temp: [],
        vibration: [],
      },
      {
        id: 3,
        name: 'HT107',
        model: 'Siemens',
        owner: 'Industria Freios Supremos 1',
        status: 'Running',
        helthLevel: '90',
        image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:4eeebb1d-1ae3-4103-99e2-d8d63a1776e6/width:1125/quality:high/simotics-gp-vsd-10-line.png',
        energy: [],
        temp: [],
        vibration: [],
      },
      {
        id: 4,
        name: 'MU503',
        model: 'Siemens',
        owner: 'Industria Freios Supremos 1',
        status: 'Running',
        helthLevel: '90',
        image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:4eeebb1d-1ae3-4103-99e2-d8d63a1776e6/width:1125/quality:high/simotics-gp-vsd-10-line.png',
        energy: [],
        temp: [],
        vibration: [],
      },
      {
        id: 5,
        name: 'TM502',
        model: 'Siemens',
        owner: 'Industria Freios Supremos 1',
        status: 'Running',
        helthLevel: '90',
        image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:4eeebb1d-1ae3-4103-99e2-d8d63a1776e6/width:1125/quality:high/simotics-gp-vsd-10-line.png',
        energy: [],
        temp: [],
        vibration: [],
      },
    ]);
    setIsLoading(false);
  };

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
    assets,
    getAssets,
    isLoading,
    setIsLoading,
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