/* eslint-disable consistent-return */
import React, { useContext, useEffect } from 'react';
import StocksToInvestTable from './StocksToInvestTable/Table';
import Header from '../../components/Header/Header/Header';
import NegotiatedStocks from './NegotiatedStocksMenu/NegotiatedStocks';
import stockContext from '../../context/stockContext';
import Alert from '../../components/Alert/Alert';
import EndPurchaseOrSale from './NegotiatedStocksMenu/EndPurchaseOrSale/EndPurchaseOrSale';
import './stocksQuotes.css';

export default function stocksQuotes() {
  const {
    isStockMenuRendered,
    isEndPurchaseOrSaleRendered,
    errorMessage,
    isPurchaseDone,
    setAccountBalance,
  } = useContext(stockContext);

  useEffect(() => {
    const accValue = localStorage.getItem('accountBalance');
    const parserAccValue = JSON.parse(accValue);
    if (parserAccValue) {
      setAccountBalance(parserAccValue);
    }
  }, []);

  return (
    <>
      <Header />
      {
        isPurchaseDone && <div id="purchase-made">Compra efetuada!</div>
      }
      {
        errorMessage && <Alert message={ errorMessage } />
      }
      {
        isEndPurchaseOrSaleRendered && <EndPurchaseOrSale />
      }
      <main id="page-main-container">
        <StocksToInvestTable />
        {
          isStockMenuRendered && <NegotiatedStocks />
        }
      </main>
    </>
  );
}
