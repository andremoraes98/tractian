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
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showTemperatureGraphic, setShowTemperatureGraphic] = useState(false);
  const [showEnergyGraphic, setShowEnergyGraphic] = useState(false);
  const [showVibrationGraphic, setShowVibrationGraphic] = useState(false);
  

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
        image: 'https://static.weg.net/medias/images/h64/hb9/MKT_WMO_BR_TEXT_IMAGE_W22_10_12_Polos_515Wx515H.webp',
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
        image: 'https://www.solucoesindustriais.com.br/images/produtos/imagens_11329/thumbnails/350/motores-eletricos-weg_11329_219772_1567785851336_cover.jpg',
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
    setShowConfirmMessage,
    toggleConfirmMessage,
    assets,
    getAssets,
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