import React from 'react';
import { useHistory } from 'react-router-dom';

export default function DepositOrWithdrawButton() {
  const history = useHistory();

  const goToDepositOrWithdrawPage = () => {
    history.push('/acoes/deposito/retirada');
  };

  return (
    <button
      onClick={ goToDepositOrWithdrawPage }
      type="button"
    >
      Depósito/ Retirada
    </button>
  );
}
