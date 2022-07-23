import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import stockContext from '../../context/stockContext';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/header/Header/Header';

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
      return;
    }
    setAccountBalance(0);
  }, []);

  useEffect(() => {
    const accValue = localStorage.getItem('accountBalance');
    const parseAccValue = JSON.parse(accValue);
    if (!accountBalance) {
      if (parseAccValue) {
        setAccountBalance(parseAccValue);
        return;
      }
    }
    localStorage.setItem('accountBalance', accountBalance);
    setAccountBalance(parseAccValue);
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
    // window.localStorage.setItem('accountBalance', JSON.stringify(accountBalance));
  };

  return (
    <>
      <Header />
      <main>
        <h2>Saldo em conta</h2>
        {
        errorMessage && <Alert message={ errorMessage } />
      }
        <p>{ accountBalance }</p>
        <p>Limite máximo a ser depositado: R$10.000.</p>
        <button disabled={ !inputValue } onClick={ sumValue } type="button">Depósito</button>
        <button disabled={ !inputValue } onClick={ discountValue } type="button">Retirada</button>
        <div>
          <input value={ inputValue } onChange={ getValue } type="number" placeholder="Informe o valor" />
        </div>
        <button onClick={ goToStockListPage } type="button">Voltar</button>
      </main>
    </>
  );
}
