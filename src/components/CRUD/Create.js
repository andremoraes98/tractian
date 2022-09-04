import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div
      id="unit-create"
      className="unit unit-flex bg-green"
      onClick={ () => navigate(`${pathName}/create`) }
    >
      <h1 className="unit-title">Registrar</h1>
      <TiPlus className="simbol-unit" />
    </div>
  );
}

export default Create;