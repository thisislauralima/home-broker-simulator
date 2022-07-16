import React from 'react';
import Header from '../Header/Header';

export default function DepositOrWithdrawScreen() {
  return (
    <main>
      <Header />
      <h2>Saldo em conta</h2>
      <button type="button">Depósito</button>
      <button type="button">Retirada</button>
      <input type="number" placeholder="Informe o valor" />
    </main>
  );
}
