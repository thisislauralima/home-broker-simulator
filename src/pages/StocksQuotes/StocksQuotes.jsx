/* eslint-disable consistent-return */
import React, { useContext, useEffect } from 'react';
import StocksToInvestTable from './StocksToInvestTable/Table';
import Header from '../../components/Header/Header';
import NegotiatedStocks from '../../components/NegotiatedStocksMenu/NegotiatedStocks';
import stockContext from '../../context/stockContext';
import Alert from '../../components/Alert/Alert';
import EndPurchaseOrSale from '../../components/NegotiatedStocksMenu/EndPurchaseOrSale';
import DoneOperation from './DoneOperation';
import allStocks from '../../data/allStocks';

export default function stocksQuotes() {
  const {
    isStockMenuRendered,
    isEndPurchaseOrSaleRendered,
    errorMessage,
    isPurchaseDone,
    setAccountBalance,
    isMainTableRendered,
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
      { errorMessage && <Alert message={ errorMessage } /> }
      {
        isPurchaseDone
        && <DoneOperation />
      }
      { isEndPurchaseOrSaleRendered && <EndPurchaseOrSale /> }
      <main className="mt-10 max-w-4xl mx-4">
        { isStockMenuRendered && <NegotiatedStocks /> }
        {
          isMainTableRendered && (
          <StocksToInvestTable
            arrayToRender={ allStocks }
            tableHeigth="overflow-y-scroll h-[380px] w-full"
          />
          )
        }
      </main>
    </>
  );
}
