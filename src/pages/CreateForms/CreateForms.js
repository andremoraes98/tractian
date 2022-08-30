import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import './CreateForms.css'

function CreateForms() {
  const { industryName, setAssetInfo } = useContext(TractianContext);
  const [assetName, setAssetName] = useState('');
  const [assetModel, setAssetModel] = useState('');
  const [assetStatus, setAssetStatus] = useState('');
  const [assetHealthy, setAssetHealthy] = useState(0);
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

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
        image: '',
      });
      navigate(`/${industryName}`);
    }

    setIsValidated(true);
  };
  
  return (
    <Form
      noValidate
      validated={ isValidated }
      onSubmit={ handleSubmit }
    >
      <h1 className="title">Insira as informações do ativo:</h1>
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
          Criar
        </Button>
      </div>
    </Form>
  )
}

export default CreateForms;