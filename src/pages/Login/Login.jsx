import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  const goToStockListPage = () => {
    history.push('/acoes');
  };

  return (
    <form>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button type="button" onClick={ goToStockListPage }>Acessar</button>
    </form>
  );
}
