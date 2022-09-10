import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import stockContext from '../../context/stockContext';
import StocksToInvestTable from '../StocksQuotes/StocksToInvestTable/Table';
import NegotiatedStocks from '../../components/NegotiatedStocksMenu/NegotiatedStocks';
import AskToInvest from './AskToInvest';
import EndPurchaseOrSale from '../../components/NegotiatedStocksMenu/EndPurchaseOrSale';
import Alert from '../../components/Alert/Alert';

export default function PersonalStocks() {
  const {
    isAskToInvest,
    setIsAskToInvest,
    isPersonalTableOpened,
    setIsPersonalTableOpened,
    isPersonalMenuOpened,
    setIsSaleBtnDisabled,
    isEndPurchaseOrSaleRendered,
    errorMessage,
    setAccountBalance,
  } = useContext(stockContext);

  useEffect(() => {
    setIsSaleBtnDisabled(false);
    if (!JSON.parse(localStorage.getItem('boughtStocks'))) {
      setIsAskToInvest(true);
      setIsPersonalTableOpened(false);
      return;
    }
    setIsAskToInvest(false);
    setIsPersonalTableOpened(true);
  }, []);

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
      { isAskToInvest && <AskToInvest /> }
      { isEndPurchaseOrSaleRendered && <EndPurchaseOrSale />}
      {
        isPersonalTableOpened
        && (
          <main className="mt-10 max-w-4xl mx-4">
            <StocksToInvestTable
              arrayToRender={ JSON.parse(localStorage.getItem('boughtStocks')) }
              isBtnDisabled={ false }
              tableHeigth="h-[380px] w-full h-fit"
              isPersonalTable="true"
            />
          </main>
        )
      }
      {
        isPersonalMenuOpened && (
        <NegotiatedStocks
          isPersonalTable="true"
          isPersonalMenu="true"
          isSaleBtnDisabledProp={ false }
        />
        )
      }
    </>
  );
}
