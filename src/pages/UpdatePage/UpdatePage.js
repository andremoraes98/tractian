import React, { useContext, useEffect } from 'react';
import Aset from '../../components/Aset/Aset';
import Loading from '../../components/Loading/Loading';
import TractianContext from '../../context/TractianContext';
import NoAsset from '../../components/NoAset/NoAsset';
import './UpdatePage.css';

function UpdatePage() {
  const {
    assets,
    getAssetsFromUnit,
    isLoading,
    userLogged: { unit },
  } = useContext(TractianContext);

  useEffect(() => {
    getAssetsFromUnit(unit);
  }, []);

  return (
    isLoading
      ? <Loading />
      : (
        <main id="update-assets">
          <h1 className="title green">Selecione o ativo que deseja <strong>Editar</strong>:</h1>
          {
            assets.length === 0
              ? <NoAsset
                  color="green"
                />
              : (
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
              )
          }
        </main>
      )
  )
}

export default UpdatePage;
