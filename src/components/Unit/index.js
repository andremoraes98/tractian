import React, { useContext } from 'react';
import TractianContext from '../../context/TractianContext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { FaIndustry } from 'react-icons/fa';
import './Unit.css';

function Unit({ unitName }) {
  const navigate = useNavigate();
  const context = useContext(TractianContext);

  const redirectToIndustry = () => {
    context.setIndustryName(unitName);
    navigate(`/${unitName}`);
  }

  return (
    <div
      className="unit unit-flex"
      onClick={ redirectToIndustry }
    >
      <h1 className="unit-title">{ unitName }</h1>
      <FaIndustry className="simbol-unit" />
    </div>
  );
}

Unit.propTypes = {
  unitName: PropTypes.string.isRequired,
};

export default Unit;