import React from 'react';
import PropTypes from 'prop-types';
import './Aset.css';
import { useNavigate,  } from 'react-router-dom';

function Aset({ aset, color }) {
  const {
    id,
    name,
    model,
    status,
    helthLevel,
    image,
  } = aset;
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div
      id='aset'
      className= { `aset-${color} display-flex` }
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

Aset.propTypes = {
  aset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    helthLevel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
}

export default Aset;
