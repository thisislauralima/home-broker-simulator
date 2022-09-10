import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../../../context/stockContext';

export default function EndOperationBtn({ isPersonalMenu }) {
  const {
    stockFinalPriceDecimal,
    inputValueQuantityStock,
    inputValueStockCode,
    accountBalance,
    stockInfo,
    setErrorMessage,
    setIsEndPurchaseOrSaleRendered,
    setAccountBalance,
    setIsStockMenuRendered,
    setIsMainTableRendered,
    btnColor,
    setIsPersonalMenuOpened,
    setIsPersonalTableOpened,
  } = useContext(stockContext);

  const validateStockCodeInput = () => {
    if (!inputValueStockCode) {
      setErrorMessage('Insira o código do ativo.');
      return false;
    }
    return 'tudo certo';
  };

  const validateStockQuantity = () => {
    if (Number(inputValueQuantityStock) === 0) {
      setErrorMessage('Selecione a quantidade do lote.');
      return false;
    } if (Number(inputValueQuantityStock) % 100 !== 0) {
      setErrorMessage('A quantidade de ação não é múltipla de lote.');
      return false;
    } if (Number(inputValueQuantityStock) > stockInfo[0].quantity) {
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

  const validateQuantityAtSale = () => {
    const allBoughtStocks = JSON.parse(localStorage.getItem('boughtStocks'));
    const boughtQuantity = allBoughtStocks.filter((stock) => stock.quantity);
    if (boughtQuantity > Number(inputValueQuantityStock)) {
      setErrorMessage('Não é permitido vender uma quantia além da comprada.');
      return false;
    }
    return 'tudo certo';
  };

  const checkIfStockIsBought = () => {
    const allBoughtStocks = JSON.parse(localStorage.getItem('boughtStocks'));
    if (!allBoughtStocks.includes(stockInfo[0].name)) {
      setErrorMessage('O código da ação inserido não está na sua carteira.');
      return false;
    }
    return 'tudo certo';
  };

  const validateQuantityInputAtSale = () => {
    if (Number(inputValueQuantityStock) === 0) {
      setErrorMessage('Selecione a quantidade do lote.');
      return false;
    } if (Number(inputValueQuantityStock) % 100 !== 0) {
      setErrorMessage('A quantidade de ação não é múltipla de lote.');
      return false;
    }
    return 'tudo certo';
  };

  const removeSoldStock = () => {
    JSON.parse(localStorage.getItem('boughtStocks')).filter((stock) => (
      stock.stockName !== stockInfo[0].name));
  };
  const validateStockSale = () => {
    if (validateQuantityAtSale() === 'tudo certo'
    && validateStockCodeInput() === 'tudo certo'
    && validateQuantityInputAtSale() === 'tudo certo'
    && checkIfStockIsBought() === 'tudo certo') {
      setErrorMessage('');
      setIsPersonalTableOpened(false);
      setIsPersonalMenuOpened(false);
      setIsEndPurchaseOrSaleRendered(true);
      removeSoldStock();
    }
  };

  const validatePersonalPurchase = () => {
    if (validateStockQuantity() === 'tudo certo'
    && validateStockCodeInput() === 'tudo certo'
    && validateAccountBalance() === 'tudo certo') {
      setErrorMessage('');
      updateAccountBalance();
      setIsPersonalTableOpened(false);
      setIsPersonalMenuOpened(false);
      setIsEndPurchaseOrSaleRendered(true);
    }
  };

  const validatePersonaleTransactions = () => {
    if (btnColor.lighter === 'boleta-lighter-green') {
      validateStockSale();
      return;
    } if (btnColor.lighter === 'boleta-lighter-yellow') {
      validatePersonalPurchase();
    }
  };

  const endOperation = () => {
    if (isPersonalMenu) {
      validatePersonaleTransactions();
      return;
    }
    if (validateStockCodeInput() === 'tudo certo'
      && validateStockQuantity() === 'tudo certo'
      && validateAccountBalance() === 'tudo certo') {
      setErrorMessage('');
      setIsEndPurchaseOrSaleRendered(true);
      setIsStockMenuRendered(false);
      setIsMainTableRendered(false);
      updateAccountBalance();
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <button onClick={ endOperation } className={ `${btnColor.darker === 'boleta-darker-yellow' ? 'bg-boleta-darker-yellow' : 'bg-boleta-darker-green'} p-2 rounded-md ` } type="button">Enviar ordem</button>
    </div>
  );
}

EndOperationBtn.propTypes = {
  isPersonalMenu: PropTypes.bool,
}.isRequired;
