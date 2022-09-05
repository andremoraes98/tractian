import React, { useContext, useEffect } from 'react';
import Aset from '../../components/Aset/Aset';
import Loading from '../../components/Loading/Loading';
import NoAsset from '../../components/NoAset/NoAsset';
import TractianContext from '../../context/TractianContext';
import './ReadPage.css'

function ReadPage() {
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
          <main id="read-assets">
            <h1 className="title blue">Selecione o ativo que deseja <strong>Monitorar</strong>:</h1>
            {
              assets.length === 0
                ? <NoAsset
                  color="blue"
                />
                : (
                  <div
                    id="assets"
                    className="display-flex space-around"
                  >
                    {
                      assets.map((aset, index) => (
                        <Aset
                          key={ index + 1 }
                          aset={ aset }
                          color="blue"
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

export default ReadPage;
