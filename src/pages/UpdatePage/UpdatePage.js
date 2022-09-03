import React, { useContext, useEffect } from 'react';
import Aset from '../../components/Aset/Aset';
import Loading from '../../components/Loading/Loading';
import TractianContext from '../../context/TractianContext';
import './UpdatePage.css';

function UpdatePage() {
  const { assets, getAssets, isLoading } = useContext(TractianContext);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    isLoading
      ? <Loading />
      : (
        <main id="update-assets">
          <h1 className="title green">Selecione o ativo que deseja <strong>Editar</strong>:</h1>
          <div
            id="assets"
            className="display-flex space-around"
          >
            {
              assets.map((aset, index) => (
                <Aset
                  key={ index }
                  aset={aset}
                  color="green"
                  id={ index + 1 }
                />
              ))
            }
          </div>
        </main>
      )
  )
}

export default UpdatePage;
