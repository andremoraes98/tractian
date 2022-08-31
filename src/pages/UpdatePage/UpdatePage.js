import React, { useContext, useEffect } from 'react';
import Asset from '../../components/Aset/Aset';
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
              assets.map((asset) => (
                <Asset
                  key={ asset.id }
                  asset={asset}
                />
              ))
            }
          </div>
        </main>
      )
  )
}

export default UpdatePage;
