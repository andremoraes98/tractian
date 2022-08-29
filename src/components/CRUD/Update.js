import React from 'react';
import { MdEdit } from 'react-icons/md';

function Update() {
  return (
    <div
    id="unit-update"
      className="unit unit-flex bg-green"
    >
      <h1 className="unit-title">Editar</h1>
      <MdEdit className="simbol-unit" />
    </div>
  );
}

export default Update;