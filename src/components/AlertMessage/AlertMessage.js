import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import { useNavigate } from 'react-router-dom';

function AlertMessage() {
  const { 
    showAlertMessage,
    setShowAlertMessage, 
    toggleConfirmMessage,
    industryName,
  } = useContext(TractianContext);
  const navigate = useNavigate();

  const onSuccess = () => {
    setShowAlertMessage(false);
    toggleConfirmMessage('atualizado', true);
    navigate(`/${industryName}`);
  };

  return (
    <Modal show={ showAlertMessage } onHide={ () => setShowAlertMessage(true) }>
      <Modal.Header closeButton>
        <Modal.Title>Tem certeza que deseja prosseguir?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Uma vez confirmada, não há como desfazer as mudanças.</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowAlertMessage(false)}>
          Cancelar
        </Button>
        <Button variant="success" onClick={ onSuccess }>
          Salvar mudanças
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertMessage;
