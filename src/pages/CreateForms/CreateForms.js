import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import TractianContext from '../../context/TractianContext';
import './CreateForms.css'

function CreateForms() {
  const {
    setAssetInfo,
    toggleConfirmMessage,
    createAsset,
  } = useContext(TractianContext);
  const { unit } = useParams();
  const [assetName, setAssetName] = useState('');
  const [assetModel, setAssetModel] = useState('');
  const [assetStatus, setAssetStatus] = useState('');
  const [assetImage, setAssetImage] = useState('');
  const [temperatureLimit, setTemperatureLimit] = useState('');
  const [energyLimit, setEnergyLimit] = useState('');
  const [vibrationLimit, setVibrationLimit] = useState('');
  const [assetHealthy, setAssetHealthy] = useState('0');
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

  const createObjectOfData = (limitNumber) => {
    const arrayLenght = 30;
    const data = new Array(arrayLenght).fill(0);
    const limit = new Array(arrayLenght).fill(Number(limitNumber));

    return {
      limit,
      data
    }
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const createdAsset = {
      name: assetName,
      model: assetModel,
      owner: unit,
      status: assetStatus,
      helthLevel: assetHealthy,
      image: assetImage,
      energy: createObjectOfData(energyLimit),
      temp: createObjectOfData(temperatureLimit),
      vibration: createObjectOfData(vibrationLimit),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setAssetInfo(createdAsset);
      createAsset(createdAsset);
      toggleConfirmMessage('criado', true);
      navigate(`/${unit}`);
    }

    setIsValidated(true);
  };
  
  return (
    <Form
      noValidate
      validated={ isValidated }
      onSubmit={ handleSubmit }
    >
      <h1 className="title green">Insira as informações do ativo:</h1>
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
        label="Temperatura Nominal (ºC)"
        className="m-3"
      >
        <Form.Control
          required
          type="number"
          placeholder="Temperatura Nominal (ºC)"
          value={ temperatureLimit }
          onChange={ ({ target }) => setTemperatureLimit(target.value) }
        />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Potência Nominal (kW)"
        className="m-3"
      >
        <Form.Control
          required
          type="number"
          placeholder="Potência Nominal (kW)"
          value={ energyLimit }
          onChange={ ({ target }) => setEnergyLimit(target.value) }
        />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Vibração tolerável (mm/s.RMS)"
        className="m-3"
      >
        <Form.Control
          required
          type="number"
          placeholder="Vibração tolerável (mm/s.RMS)"
          value={ vibrationLimit }
          onChange={ ({ target }) => setVibrationLimit(target.value) }
        />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Link da imagem"
        className="m-3"
      >
        <Form.Control
          required
          type="text"
          placeholder="Link da imagem"
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
          min="1"
          max="100"
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