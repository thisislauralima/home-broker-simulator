import React, { useEffect, useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import stockContext from '../../../context/stockContext';

export default function Header() {
  const { setErrorMessage, userEmail, setUserEmail } = useContext(stockContext);

  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    if (JSON.parse(data).email === null) {
      setUserEmail('');
      return;
    }
    setUserEmail(JSON.parse(data).email);
  }, []);

  const cleanErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <header id="pageHeader">
      <Link onClick={ cleanErrorMessage } to="/acoes/">Cotações</Link>
      <Link onClick={ cleanErrorMessage } to="/acoes/carteira">Carteira</Link>
      <Link onClick={ cleanErrorMessage } to="/acoes/transacoes">Depósito ou retirada</Link>
      {
        userEmail && <p>{ userEmail }</p>
      }
    </header>
  );
}
