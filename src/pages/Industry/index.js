import React, { useContext, useEffect } from 'react';
import ConfirmMessage from '../../components/ConfirmMessage/ConfirmMessage';
import CRUD from '../../components/CRUD';
import TractianContext from '../../context/TractianContext';

function Industry() {
  const { industryName, toggleConfirmMessage } = useContext(TractianContext);

  useEffect(() => {
    const intervalConfirmMessage = setInterval(() => toggleConfirmMessage('', false), 3000);
    return () => clearInterval(intervalConfirmMessage)
  });

  return (
    <section className="display-flex">
      <ConfirmMessage />
      <h1 className="title">{ industryName }</h1>
      <CRUD />
    </section >
  );
}

export default Industry;