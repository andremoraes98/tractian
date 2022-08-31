import React, { useContext } from 'react';
import Fade from 'react-bootstrap/Fade';
import TractianContext from '../../context/TractianContext';
import './ConfirmMessage.css';

function ConfirmMessage() {
  const { showConfirmMessage, confirmMessage, assetInfo: { name } } = useContext(TractianContext);
  return (
    <Fade in={ showConfirmMessage }>
      <div
        id="confirm-message"
        className={ confirmMessage === 'excluído' ? 'bg-red m-3' : 'bg-green m-3'}
      >
        <p>O ativo <strong>{ name }</strong> foi { confirmMessage } com sucesso!</p>
      </div>
    </Fade>
  )
}

export default ConfirmMessage;