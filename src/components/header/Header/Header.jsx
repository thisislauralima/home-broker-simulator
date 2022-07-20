import React, { useEffect, useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import stockContext from '../../../context/stockContext';

export default function Header() {
  const { userEmail, setUserEmail } = useContext(stockContext);

  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    setUserEmail(JSON.parse(data).email);
  }, []);

  return (
    <header id="pageHeader">
      <nav>XP</nav>
      <Link to="acoes/cliente">Carteira</Link>
      <Link to="/acoes/deposito/retirada">Depósito ou retirada</Link>
      {
        userEmail && <p>{ userEmail }</p>
      }
    </header>
  );
}
