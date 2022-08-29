import React from 'react';
import { TiPlus } from 'react-icons/ti';

function Create() {
  return (
    <div
      id="unit-create"
      className="unit unit-flex bg-green"
    >
      <h1 className="unit-title">Registrar</h1>
      <TiPlus className="simbol-unit" />
    </div>
  );
}

export default Create;