import React from 'react';
import Unit from '../../components/Unit';
import './Main.css'

function Main() {
  return (
    <section className="display-flex">
      <h1 className="title">Selecione a unidade que deseja monitorar:</h1>
      <Unit unitName="Industria Freios Supremos 1" />
      <Unit unitName="Industria Freios Supremos 2" />
    </section>
  );
}

export default Main;