import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <p>Usuário XPTO</p>
      <Link to="acoes/cliente">Suas Ações</Link>
    </header>
  );
}
