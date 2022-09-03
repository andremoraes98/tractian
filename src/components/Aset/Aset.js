import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Aset.css';
import { useNavigate,  } from 'react-router-dom';
import TractianContext from '../../context/TractianContext';

function Aset({ id, aset, color }) {
  const { setShowDeleteMessage, setAssetInfo } = useContext(TractianContext)
  const {
    name,
    model,
    status,
    helthLevel,
    image,
  } = aset;
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  const statusHealth = {
    Running: 'Funcionando',
    Alerting: 'Em Alerta, ',
    Stopped: 'Parado',
  }

  const onClickAction = () => {
    setAssetInfo({
      name,
      model,
      status,
      helthLevel,
      image,
    })
    if (!pathName.includes('delete')) {
      return navigate(`${pathName}/${id}`);
    }
    setShowDeleteMessage(true);
  }

  return (
    <div
      id='aset'
      className= { `aset-${color} display-flex` }
      onClick={ onClickAction }
    >
      <p>{ `${id} - ${model}` } <strong>{ name }</strong>:</p>
      <div id="aset-image">
        <img src={ image }/>
      </div>
      <p>{ `${statusHealth[status]} com ${helthLevel}% de saúde.` }</p>
    </div>
  )
}

Aset.propTypes = {
  id: PropTypes.number.isRequired,
  aset: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    helthLevel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
}

export default Aset;
