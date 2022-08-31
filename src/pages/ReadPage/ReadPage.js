import React from 'react';
import Asset from '../../components/Asset/Asset';
import './ReadPage.css'

function ReadPage() {
  const defaultAsset = {
    id: 1,
    name: 'Máquina Siemens'
  };

  return (
    <main>
      <h1 className="title blue">Selecione o ativo que deseja <strong>Monitorar</strong>:</h1>
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

export default ReadPage;
