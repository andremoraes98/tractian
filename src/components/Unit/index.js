import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { FaIndustry } from 'react-icons/fa';
import './Unit.css';

function Unit({ unitName }) {
  const navigate = useNavigate();
  return (
    <div
      className="unit unit-flex"
      onClick={ () => navigate(`/${unitName}`)}
    >
      <h1 className="unit-title">{ unitName }</h1>
      <FaIndustry id="industry" />
    </div>
  );
}

Unit.propTypes = {
  unitName: PropTypes.string.isRequired,
};

export default Unit;