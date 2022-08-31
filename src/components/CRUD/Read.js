import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Read() {
  const navigate = useNavigate();

  return (
    <div
      id="unit-read"
      className="unit unit-flex"
      onClick={ () => navigate('/read') }
    >
      <h1 className="unit-title">Monitorar</h1>
      <BsFillGearFill className="simbol-unit" />
    </div>
  );
}

export default Read;