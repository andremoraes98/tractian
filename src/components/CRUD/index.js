import React from 'react';
import Create from './Create';
import Delete from './Delete';
import Read from './Read';
import Update from './Update';
import './crud.css'

function CRUD() {
  return (
    <section className="display-flex">
      <Read />
      <Create />
      <Update />
      <Delete />
    </section>
  );
}

export default CRUD;