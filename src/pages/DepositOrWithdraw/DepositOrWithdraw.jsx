import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import stockContext from '../../context/stockContext';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';

export default function DepositOrWithdraw() {
  const [provAccountBalance, setProvAccountBalance] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const {
    accountBalance,
    setAccountBalance,
    errorMessage,
    setErrorMessage,
  } = useContext(stockContext);

  const history = useHistory();

  useEffect(() => {
    const accValue = localStorage.getItem('accountBalance');
    const parserAccValue = JSON.parse(accValue);
    if (parserAccValue) {
      setAccountBalance(parserAccValue);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('accountBalance', accountBalance);
  }, [accountBalance]);

  const goToStockListPage = () => {
    history.push('/acoes');
  };

  const getValue = ({ target: { value } }) => {
    setInputValue(value);
    const valueTypeNumber = parseInt(value, 10);
    setProvAccountBalance(valueTypeNumber);
  };

  const sumValue = async () => {
    setInputValue(0);
    if (!Number(accountBalance)) {
      setAccountBalance(0 + provAccountBalance);
      return;
    }
    if (provAccountBalance > 10000) {
      setErrorMessage('O valor máximo a ser depositado é R$10.000');
      return;
    }
    setErrorMessage('');
    setAccountBalance((prevState) => prevState + provAccountBalance);
  };

  const discountValue = () => {
    setInputValue(0);
    if (provAccountBalance > accountBalance) {
      setErrorMessage('Não é permitido sacar um valor maior do que o disponível na conta.');
      return;
    }
    setErrorMessage('');
    setAccountBalance((prevState) => prevState - provAccountBalance);
  };

  return (
    <>
      <Header />
      {
        errorMessage && <Alert message={ errorMessage } />
      }
      <div className="display flex justify-center">
        <main className="bg-end-operation-gray-darker rounded text-black w-fit p-10 mt-10 text-center">
          <div className="flex my-3.5 justify-center">
            <h2 className="mr-1">Saldo em conta:</h2>
            <p className="font-extrabold">{ `R$${accountBalance.toFixed(2)}` }</p>
          </div>
          <div className="flex justify-around my-3.5">
            <button
              className="bg-my-custom-blue text-white p-2 rounded"
              disabled={ !inputValue }
              onClick={ sumValue }
              type="button"
            >
              Depósito

            </button>
            <button
              className="bg-my-custom-blue text-white p-2 rounded"
              disabled={ !inputValue }
              onClick={ discountValue }
              type="button"
            >
              Retirada

            </button>
          </div>
          <div className="flex justify-center my-3.5">
            <input className="text-center rounded" value={ inputValue } onChange={ getValue } type="number" placeholder="Informe o valor" />
          </div>
          <div className="my-3.5">
            <p>Limite máximo a ser depositado: R$10.000.</p>
          </div>
          <div className="cursor-pointer mt-2 p-3 rounded bg-my-custom-blue text-white flex justify-center">
            <button onClick={ goToStockListPage } type="button">Voltar</button>
          </div>
        </main>
      </div>
    </>
  );
}
