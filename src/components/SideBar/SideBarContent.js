import React, { useContext } from 'react';
import { BsFillPersonFill, BsPersonCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import TractianContext from '../../context/TractianContext';

function SideBarContent() {
  const navigate = useNavigate();
  const {
    setShowSideBar,
    userLogged,
    setUserLogged,
  } = useContext(TractianContext);

  const logout = () => {
    setShowSideBar(false);
    setUserLogged({});
    navigate('/');
  };

  const editProfile = () => {
    setShowSideBar(false);
    navigate(`/${userLogged.user}/edit-profile`);
  };

  return (
    <div
      id="sidebar"
      className="sidebar-flex"
    >
      {
        !(Object.keys(userLogged).length === 0)
          ? <BsPersonCheckFill
            className="person-account-check"
            />
          : <BsFillPersonFill
            className="person-account"
          />
      }
      { !(Object.keys(userLogged).length === 0) && <p><strong>Olá, { userLogged.user }!</strong></p> }
      <p>Perguntas frequentes</p>
      <p>Dúvidas? Fale conosco!</p>
      { !(Object.keys(userLogged).length === 0) &&
        <p
          onClick={ editProfile }
        >
          Editar perfil
        </p> }
      { !(Object.keys(userLogged).length === 0) &&
        <p
          id="logout"
          onClick={ logout }
        >
          Logout
        </p> }
      
    </div>
  )
}

export default SideBarContent;
