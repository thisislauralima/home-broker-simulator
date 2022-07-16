import React from 'react';
import PersonalStocks from '../../components/PersonalStocks/PersonalStocks';
import StocksToInvest from '../../components/StocksToInvest/StocksToInvest';
import DepositOrWithdrawButton from '../../components/DepositOrWithdrawButton/DepositOrWithdrawButton';
import Header from '../../components/Header/Header';

export default function StockList() {
  return (
    <>
      <Header />
      <PersonalStocks />
      <StocksToInvest />
      <DepositOrWithdrawButton />
    </>
  );
}
