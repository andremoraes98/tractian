import React, { useContext, useEffect } from 'react';
import Aset from '../../components/Aset/Aset';
import DeleteMessage from '../../components/DeleteMessage/DeleteMessage';
import Loading from '../../components/Loading/Loading';
import NoAset from '../../components/NoAset/NoAsset';
import TractianContext from '../../context/TractianContext';
import './DeletePage.css'

function DeletePage() {
  const { assets, getAssets, isLoading } = useContext(TractianContext);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    isLoading
      ? (<Loading />)
      : (
        <main id="update-assets">
          <h1 className="title red">Selecione o ativo que deseja <strong>Excluir</strong>:</h1>
          {
            assets.length === 0
              ? <NoAset />
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
                        color="red"
                        id={ index + 1}
                      />
                    ))
                  }
                </div>
              )
          }
          <DeleteMessage />
        </main>
      )
  )
}

export default DeletePage;
