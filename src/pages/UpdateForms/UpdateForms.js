import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import { useParams } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage/AlertMessage';

function UpdateForms() {
  const {
    industryName,
    setAssetInfo,
    assets,
    setShowAlertMessage,
  } = useContext(TractianContext);
  const { id } = useParams();
  const {
    name,
    model,
    status,
    image,
    helthLevel
  } = assets[id -1]
  const [assetName, setAssetName] = useState(name);
  const [assetModel, setAssetModel] = useState(model);
  const [assetStatus, setAssetStatus] = useState(status);
  const [assetImage, setAssetImage] = useState(image);
  const [assetHealthy, setAssetHealthy] = useState(Number(helthLevel));
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setAssetInfo({
        name: assetName,
        model: assetModel,
        owner: industryName,
        status: assetStatus,
        helthLevel: assetHealthy,
        image: assetImage,
      });
      setShowAlertMessage(true);
    }

    setIsValidated(true);
  };
  return (
    <>
      <Form
        noValidate
        validated={ isValidated }
        onSubmit={ handleSubmit }
      >
        <h1 className="title green">Altere as informações desejadas do ativo:</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Nome"
          className="m-3"
        >
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            value={ assetName }
            onChange={ ({ target }) => setAssetName(target.value) }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Modelo"
          className="mb-3 mx-3"
        >
          <Form.Control
            required
            type="text"
            placeholder="Modelo"
            value={ assetModel }
            onChange={ ({ target }) => setAssetModel(target.value) }
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Status"
          className="mb-3 mx-3"
        >
          <Form.Select
            required
            value={ assetStatus }
            onChange={ ({ target }) => setAssetStatus(target.value) }
          >
            <option value="">Selecione uma opção</option>
            <option value="Running">Funcionando</option>
            <option value="Alerting">Alerta</option>
            <option value="Stopped">Parado</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Imagem"
          className="m-3"
        >
          <Form.Control
            required
            type="text"
            placeholder="Imagem"
            value={ assetImage }
            onChange={ ({ target }) => setAssetImage(target.value) }
          />
        </FloatingLabel>
        <Form.Group
          className="mb-3 mx-3"
        >
          <Form.Label>{ `Saúde: ${assetHealthy}%` }</Form.Label>
          <Form.Range
            required
            min={ 1 }
            max={ 100 }
            value={ assetHealthy }
            onChange={ ({ target }) => setAssetHealthy(target.value) }
          />
        </Form.Group>
        <div
          className="form-submit-button"
        >
          <Button
            type="submit"
            variant="outline-success"
          >
            Editar
          </Button>
        </div>
      </Form>
      <AlertMessage />
    </>
  )
}

export default UpdateForms;
