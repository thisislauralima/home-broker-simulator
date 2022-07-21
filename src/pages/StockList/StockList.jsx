import React, { useContext } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import StocksToInvest from '../../components/acoes-path/StocksToInvest/StocksToInvest';
// import DepositOrWithdrawButton from
// ../../components/DepositOrWithdrawButton/DepositOrWithdrawButton';
import Header from '../../components/header/Header/Header';
// import StockPurchaseOrSale from '../../components/StockPurchaseOrSale/StockPurchaseOrSale';
import NegotiatedStocksMenu from '../../components/acoes-path/NegotiatedStocksMenu/NegotiatedStocksMenu';
import './stockList.css';
import stockContext from '../../context/stockContext';

export default function StockList() {
  const {
    isStockMenuRendered,
    isPriceAndQuantityMissing,
    isPurchaseOrSaleDone,
  } = useContext(stockContext);
  return (
    <>
      <Header />
      {
          isPurchaseOrSaleDone && isPriceAndQuantityMissing
        && (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          Verifique:
          {' '}
          <strong>Preencha obrigatoriamente os campos Preço ou Quantidade</strong>
        </Alert>
        )
      }
      <main id="page-main-container">
        <StocksToInvest />
        {
          isStockMenuRendered && <NegotiatedStocksMenu />
        }
      </main>
    </>
  );
}
