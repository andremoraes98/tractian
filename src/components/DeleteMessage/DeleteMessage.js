import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteMessage() {
  const { 
    showDeleteMessage,
    setShowDeleteMessage, 
    toggleConfirmMessage,
    deleteAsset,
    assetInfo,
  } = useContext(TractianContext);
  const navigate = useNavigate();
  const { unit } = useParams();

  const onSuccess = () => {
    deleteAsset(assetInfo._id)
    setShowDeleteMessage(false);
    toggleConfirmMessage('excluído', true);
    navigate(`/${unit}`);
  };

  return (
    <Modal show={ showDeleteMessage } onHide={ () => setShowDeleteMessage(true) }>
      <Modal.Header>
        <Modal.Title>Tem certeza que deseja excluir esse ativo?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Uma vez confirmada, não há como restaurar os dados deste ativo.</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => setShowDeleteMessage(false)}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={ onSuccess }
        >
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteMessage;
