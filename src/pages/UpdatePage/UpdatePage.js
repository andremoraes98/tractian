import React from 'react';
import Asset from '../../components/Asset/Asset';
import './UpdatePage.css';

function UpdatePage() {
  const defaultAsset = {
    id: 1,
    name: 'Máquina Siemens'
  };

  return (
    <main>
      <h1 className="title green">Selecione o ativo que deseja <strong>Editar</strong>:</h1>
      <div
        id="assets"
        className="display-flex space-around"
      >
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
        <Asset
          asset={ defaultAsset }
        />
      </div>
    </main>
  )
}

export default UpdatePage;
