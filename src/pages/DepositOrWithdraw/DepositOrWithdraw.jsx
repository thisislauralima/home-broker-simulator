import React from 'react';
import { useHistory } from 'react-router-dom';

export default function DepositOrWithdraw() {
  const history = useHistory();

  const goToStockListPage = () => {
    history.push('/acoes');
  };

  return (
    <main>
      <h2>Saldo em conta</h2>
      <button type="button">Depósito</button>
      <button type="button">Retirada</button>
      <button onClick={ goToStockListPage } type="button">Voltar</button>
      <input type="number" placeholder="Informe o valor" />
    </main>
  );
}
