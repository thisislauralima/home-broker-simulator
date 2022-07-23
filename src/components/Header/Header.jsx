import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.css';
import stockContext from '../../context/stockContext';

export default function Header() {
  const { setErrorMessage, userEmail } = useContext(stockContext);
  const history = useHistory();

  useEffect(() => {
    if (!userEmail) {
      history.push('/login');
    }
  });

  const cleanErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <header id="pageHeader">
      <Link onClick={ cleanErrorMessage } to="/acoes/">Cotações</Link>
      <Link onClick={ cleanErrorMessage } to="/acoes/carteira">Carteira</Link>
      <Link onClick={ cleanErrorMessage } to="/acoes/transacoes">Depósito ou retirada</Link>
      <p>{ userEmail }</p>
    </header>
  );
}
