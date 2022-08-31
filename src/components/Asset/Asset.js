import React from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import { useNavigate,  } from 'react-router-dom';

function Asset({ asset }) {
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
      className={ pathName.includes('update')
        ? 'asset-green display-flex'
        : 'asset-blue display-flex' }
      onClick={ () => navigate(`${pathName}/${id}`)}
    >
      <p>{ `${id} - ${model} ${name}` }</p>
      <img src={ image }/>
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
}

export default Asset;
