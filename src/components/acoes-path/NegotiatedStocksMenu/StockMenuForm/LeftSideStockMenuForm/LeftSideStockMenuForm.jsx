/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import stockContext from '../../../../../context/stockContext';
import StockListToNegotiate from './StockListToNegotiate/StockListToNegotiate';
import allStocks from '../../../../../data/allStocks';
import RightSideStockMenuForm from '../RightSideStockMenuForm/RigthSideStockMenuForm';
import './leftSideStockMenuForm.css';

export default function LeftSideStockMenuForm() {
  const {
    setIsStocksCodeRendered,
    btnColor,
    isStocksCodeRendered,
    setStockCode,
    stockInfo,
    setStockQuantity,
    setStockFinalPriceDecimal,
    setPaidPriceForStock,
  } = useContext(stockContext);

  const renderStocksCode = () => {
    setIsStocksCodeRendered(true);
  };

  const stockFinalPrice = ({ target: { value } }) => {
    setStockCode([]);
    const stockPrice = allStocks.filter(
      (stock) => stock.id === stockInfo[0].id,
    ).map(({ price }) => price);

    const finalStockPrice = stockPrice * Number(value);
    setStockQuantity(Number(value));
    setStockFinalPriceDecimal(finalStockPrice.toFixed(2));
  };

  const savePaidPrice = ({ target: { value } }) => {
    setPaidPriceForStock(value);
  };

  return (
    <form className={ `${btnColor}` } id="form-stock-menu">
      <div>
        <div>
          Ativo
          <input onClick={ renderStocksCode } className={ `${btnColor} short-menu-input` } />
          {
              isStocksCodeRendered && <StockListToNegotiate />
            }
        </div>
        <label className="input-label-short-menu" htmlFor="shortMenuInput-2">
          Quantidade
          <input
            onClick={ stockFinalPrice }
            className={ `${btnColor} short-menu-input` }
            min="0"
            type="number"
          />
        </label>
        <label htmlFor="shortMenuInput-3">
          Preço
          <input
            step="0.1"
            onClick={ savePaidPrice }
            className={ `${btnColor} short-menu-input` }
            min="0"
            type="number"
          />
        </label>
      </div>
      <RightSideStockMenuForm />
    </form>
  );
}
