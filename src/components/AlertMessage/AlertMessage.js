import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AlertMessage() {
  const { 
    showAlertMessage,
    setShowAlertMessage, 
    toggleConfirmMessage,
    industryName,
    assets,
    updateAsset,
    assetInfo,
  } = useContext(TractianContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    name,
    model,
    status,
    image,
    helthLevel
  } = assetInfo

  const updatedAset = {
    ...assets[id - 1],
    name,
    model,
    status,
    image,
    helthLevel,
    updatedAt: new Date(),
  }

  const onSuccess = () => {
    setShowAlertMessage(false);
    updateAsset(assetInfo._id, updatedAset)
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
