import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { BsPersonCheckFill } from 'react-icons/bs';
import './Unit.css';

function Unit({ credentials: { user, unit } }) {
  const navigate = useNavigate();

  const redirectToIndustry = () => {
    navigate(`/${unit}`);
  }

  return (
    <div
      id="unit-industry"
      className="unit unit-flex"
      onClick={ redirectToIndustry }
    >
      <h1 className="unit-title">{ user }</h1>
      <BsPersonCheckFill className="simbol-unit" />
    </div>
  );
}

Unit.propTypes = {
  credentials: PropTypes.shape({
    user: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired
};

export default Unit;