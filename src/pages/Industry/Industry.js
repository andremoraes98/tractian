import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmMessage from '../../components/ConfirmMessage/ConfirmMessage';
import CRUD from '../../components/CRUD/CRUD';
import TractianContext from '../../context/TractianContext';

function Industry() {
  const { unit } = useParams();
  const { setShowConfirmMessage } = useContext(TractianContext);

  useEffect(() => {
    const intervalConfirmMessage = setInterval(() => setShowConfirmMessage('', false), 3000);
    return () => clearInterval(intervalConfirmMessage)
  });

  return (
    <section className="display-flex">
      <ConfirmMessage />
      <h1 className="title">Indústria Freios Supremos - Unidade { unit }</h1>
      <h3 className="subtitle">Escolha a forma que deseja prosseguir:</h3>
      <CRUD />
    </section >
  );
}

export default Industry;