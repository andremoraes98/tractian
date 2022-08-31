import React, { useContext, useEffect } from 'react';
import Aset from '../../components/Aset/Aset';
import Loading from '../../components/Loading/Loading';
import TractianContext from '../../context/TractianContext';
import './ReadPage.css'

function ReadPage() {
  const { assets, getAssets, isLoading } = useContext(TractianContext);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    isLoading
      ? <Loading />
      : (
        <main id="read-assets">
          <h1 className="title blue">Selecione o ativo que deseja <strong>Monitorar</strong>:</h1>
          <div
            id="assets"
            className="display-flex space-around"
          >
            {
              assets.map((asset) => (
                <Aset
                  key={ asset.id }
                  asset={asset}
                  color="blue"
                />
              ))
            }
          </div>
        </main>
      )
  )
}

export default ReadPage;
