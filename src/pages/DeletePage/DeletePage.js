import React, { useContext } from 'react';
import Aset from '../../components/Aset/Aset';
import TractianContext from '../../context/TractianContext';
import './DeletePage.css'

function DeletePage() {
  const { assets } = useContext(TractianContext);

  return (
    <main id="update-assets">
      <h1 className="title red">Selecione o ativo que deseja <strong>Excluir</strong>:</h1>
      <div
        id="assets"
        className="display-flex space-around"
      >
        {
          assets.map((aset) => (
            <Aset
              key={ aset.id }
              aset={ aset }
              color="red"
            />
          ))
        }
      </div>
    </main>
  )
}

export default DeletePage;
