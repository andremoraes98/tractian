import React, { useContext, useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import DeleteMessage from '../../components/DeleteMessage/DeleteMessage';
import TractianContext from '../../context/TractianContext';

function EditProfile() {
  const {
    setUserLogged,
    userLogged: { _id, user, unit },
    setShowAlertMessage,
  } = useContext(TractianContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState(user);
  const [workUnit, setWorkUnit] = useState(unit);
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const updatedUser = {
      _id,
      user: userName,
      unit: workUnit,
    }

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setUserLogged(updatedUser);
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
                variant="success"
              >
                Editar
              </Button>
            </div>
            <div>
              <Button
                type="button"
                variant="secondary"
                onClick={ () => navigate(-1)}
              >
                Voltar
              </Button>
            </div>
          </div>
      </Form>
      <AlertMessage />
      <DeleteMessage />
    </>
  )
}

export default EditProfile;