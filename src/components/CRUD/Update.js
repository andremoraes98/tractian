import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();

  return (
    <div
      id="unit-update"
      className="unit unit-flex bg-green"
      onClick={ () => navigate('/update') }
    >
      <h1 className="unit-title">Editar</h1>
      <MdEdit className="simbol-unit" />
    </div>
  );
}

export default Update;