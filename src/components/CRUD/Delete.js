import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

function Delete() {
  return (
    <div
      id="unit-delete"
      className="unit unit-flex bg-red"
    >
      <h1 className="unit-title">Deletar</h1>
      <AiFillDelete className="simbol-unit" />
    </div>
  );
}

export default Delete;