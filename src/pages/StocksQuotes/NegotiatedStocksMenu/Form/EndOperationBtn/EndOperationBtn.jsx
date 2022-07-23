import React, { useContext } from 'react';
import stockContext from '../../../../../context/stockContext';
import './endOperationBtn.css';

export default function EndOperationBtn() {
  const {
    stockFinalPriceDecimal,
    inputValueQuantityStock,
    inputValueStockCode,
    accountBalance,
    stockInfo,
    setErrorMessage,
    setIsEndPurchaseOrSaleRendered,
    setAccountBalance,
  } = useContext(stockContext);

  const validateStockCodeInput = () => {
    if (!inputValueStockCode) {
      setErrorMessage('Insira o código do ativo.');
      return false;
    }
    return 'tudo certo';
  };

  const validateStockQuantity = () => {
    if (inputValueQuantityStock === 0) {
      setErrorMessage('Selecione a quantidade do lote.');
      return false;
    } if (inputValueQuantityStock % 100 !== 0) {
      setErrorMessage('A quantidade de ação não é múltipla de lote.');
      return false;
    } if (inputValueQuantityStock > stockInfo[0].quantity) {
      setErrorMessage('A quantidade do lote inserida não pode ser superior a disponível.');
      return false;
    }
    return 'tudo certo';
  };

  const updateAccountBalance = () => {
    const accountDiscount = accountBalance - stockFinalPriceDecimal;
    setAccountBalance(accountDiscount);
  };

  const validateAccountBalance = () => {
    if (stockFinalPriceDecimal > accountBalance) {
      setErrorMessage('O saldo da conta é inferior a quantidade solicitada.');
      return false;
    }
    return 'tudo certo';
  };

  const endOperation = () => {
    if (validateStockCodeInput() === 'tudo certo'
      && validateStockQuantity() === 'tudo certo'
      && validateAccountBalance() === 'tudo certo') {
      setErrorMessage('');
      setIsEndPurchaseOrSaleRendered(true);
      updateAccountBalance();
    }
  };

  return (
    <div id="send-order-btn-div">
      <button onClick={ endOperation } id="send-order-btn" type="button">ENVIAR ORDEM</button>
    </div>
  );
}
