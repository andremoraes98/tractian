import React, { useContext, useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TractianContext from '../../context/TractianContext';

function EditProfile() {
  const { setUserLogged, userLogged: { user, unit } } = useContext(TractianContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState(user);
  const [workUnit, setWorkUnit] = useState(unit);
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const updatedUser = {
      user: userName,
      unit: workUnit,
    }

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setUserLogged(updatedUser);
      // createAsset(createdAsset);
      // toggleConfirmMessage('criado', true);
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
      <h1 className="title green">Insira as informações do usuário:</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Nome"
        className="m-3"
      >
        <Form.Control
          required
          type="text"
          placeholder="Nome"
          value={ userName }
          onChange={ ({ target }) => setUserName(target.value) }
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Unidade"
        className="mb-3 mx-3"
      >
        <Form.Control
          required
          type="text"
          placeholder="Unidade"
          value={ workUnit }
          onChange={ ({ target }) => setWorkUnit(target.value) }
        />
      </FloatingLabel>
        <div
          className="d-flex justify-content-around"
        >
          <div>
            <Button
              type="submit"
              variant="outline-success"
            >
              Editar
            </Button>
          </div>
          <div>
            <Button
              type="button"
              variant="danger"
            >
              Excluir usuário
            </Button>
          </div>
        </div>
    </Form>
  )
}

export default EditProfile;