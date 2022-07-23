import React, { useContext } from 'react';
import stockContext from '../../../../../context/stockContext';
import allStocks from '../../../../../data/allStocks';

export default function RightSide() {
  const {
    stockInfo,
    stockFinalPriceDecimal,
  } = useContext(stockContext);

  return (
    <div>
      {
        stockInfo.length && stockInfo.map((el) => <div key={ el.id }>{el.name}</div>)
      }
      {
        stockInfo.length && allStocks.filter(
          (stock) => stock.id === stockInfo[0].id,
        ).map(({ price }) => <div key={ price }>{ `Valor do ativo: ${price}` }</div>)
      }
      <div>{ `Total: ${stockFinalPriceDecimal}` }</div>
    </div>
  );
}