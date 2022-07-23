/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import stockContext from '../../../../../context/stockContext';
import StockListToNegotiate from './StockListToNegotiate/StockListToNegotiate';
import RightSideStockMenuForm from '../RightSide/RightSide';
import './leftSide.css';

export default function LeftSide() {
  const {
    btnColor,
    setStockFinalPriceDecimal,
    setInputValueQuantityStock,
    inputValueQuantityStock,
    stockInfo,
  } = useContext(stockContext);

  const calcStockFinalPrice = () => {
    const finalStockPrice = inputValueQuantityStock * stockInfo[0].price;
    setStockFinalPriceDecimal(finalStockPrice.toFixed(2));
  };

  useEffect(() => {
    calcStockFinalPrice();
  }, [inputValueQuantityStock]);

  const saveQuantityValue = ({ target: { value } }) => {
    setInputValueQuantityStock(value);
  };

  return (
    <form className={ btnColor } id="form-stock-menu">
      <div>
        <div>
          Cd.Ativo
          <StockListToNegotiate />
        </div>
        <div className="input-div-short-menu" htmlFor="shortMenuInput-2">
          Quantidade
          <input
            value={ inputValueQuantityStock }
            onClick={ saveQuantityValue }
            onChange={ saveQuantityValue }
            className={ `${btnColor} short-menu-input` }
            min="100"
            max="5000"
            step="100"
            type="number"
          />
        </div>
      </div>
      <RightSideStockMenuForm />
    </form>
  );
}
