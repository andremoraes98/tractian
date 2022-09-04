import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Delete() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div
      id="unit-delete"
      className="unit unit-flex"
      onClick={ () => navigate(`${pathName}/delete`) }
    >
      <h1 className="unit-title">Deletar</h1>
      <AiFillDelete className="simbol-unit" />
    </div>
  );
}

export default Delete;