import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

function SideBarContent() {
  return (
    <div
      id="sidebar"
      className="sidebar-flex"
    >
      <BsFillPersonFill
        className="person-account"
      />
      <p>Fazer login</p>
      <p>Criar conta</p>
      <p>Perguntas frequentes</p>
      <p>Dúvidas? Fale conosco!</p>
    </div>
  )
}

export default SideBarContent;
