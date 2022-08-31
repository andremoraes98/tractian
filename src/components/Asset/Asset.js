import React from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import { useNavigate,  } from 'react-router-dom';

function Asset({ asset: { name, id } }) {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div
      className="asset m-3"
      onClick={ () => navigate(`${pathName}/${id}`)}
    >
      <p>{ `${id} - ${name}` }</p>
    </div>
  )
}

Asset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Asset;
