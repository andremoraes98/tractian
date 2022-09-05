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
    assets,
    updateAsset,
    assetInfo,
    updateUser,
    userLogged,
    setUserLogged,
  } = useContext(TractianContext);
  const { id, unit } = useParams();
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
    if (!unit) {
      setShowAlertMessage(false);
      updateUser(userLogged._id, userLogged);
      setUserLogged({});
      navigate('/');
      return null
    }

    setShowAlertMessage(false);
    updateAsset(assetInfo._id, updatedAset)
    toggleConfirmMessage('atualizado', true);
    navigate(`/${unit}`);
  };

  return (
    <Modal
      show={ showAlertMessage }
      onHide={ () => setShowAlertMessage(true) }
    >
      <Modal.Header>
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
