import React from 'react';
import './NoAsset.css';
import PropTypes from 'prop-types';

function NoAsset({ color }) {
  return (
    <h1
      id="no-asset"
      className={ `title ${color}` }
    >
      Nenhum ativo cadastrado. Cadastre para começar o monitoramento!
    </h1>
  )
}

NoAsset.propTypes = {
  color: PropTypes.string.isRequired,
};

export default NoAsset;
