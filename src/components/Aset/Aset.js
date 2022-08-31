import React from 'react';
import PropTypes from 'prop-types';
import './Aset.css';
import { useNavigate,  } from 'react-router-dom';

function Asset({ asset, color }) {
  const {
    id,
    name,
    model,
    status,
    helthLevel,
    image,
  } = asset;
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div
      id='asset'
      className= { `asset-${color} display-flex` }
      onClick={ () => navigate(`${pathName}/${id}`)}
    >
      <p>{ `${id} - ${model} ${name}` }</p>
      <div id="aset-image">
        <img src={ image }/>
      </div>
      <p>{ `${status} com ${helthLevel}% de saúde.` }</p>
    </div>
  )
}

Asset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    helthLevel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
}

export default Asset;
