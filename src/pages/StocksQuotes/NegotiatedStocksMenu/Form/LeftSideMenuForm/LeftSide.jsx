/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import stockContext from '../../../../../context/stockContext';
import StockListToNegotiate from './LeftSide/StockListToNegotiate';
import BottomSection from '../BottomSection/BottomSection';
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
    const finalStockPrice = Number(inputValueQuantityStock) * stockInfo[0].price;
    setStockFinalPriceDecimal(finalStockPrice.toFixed(2));
  };

  useEffect(() => {
    calcStockFinalPrice();
  }, [inputValueQuantityStock]);

  const saveQuantityValue = ({ target: { value } }) => {
    setInputValueQuantityStock(value);
  };

  return (
    <form className={ `py-4 min-w-[300px] ${btnColor}` } id="form-stock-menu">
      <div>
        <div className="mx-10 min-w-[300px]">
          <StockListToNegotiate />
        </div>
        <div className="mx-10 min-w-[300px]">
          <div className="flex input-div-short-menu mt-3.5 text-boleta-form-gray" htmlFor="shortMenuInput-2">Quantidade</div>
          <input
            value={ inputValueQuantityStock }
            onClick={ saveQuantityValue }
            onChange={ saveQuantityValue }
            className="rounded-md w-40 border-none short-menu-input text-white font-light bg-boleta-input-color"
            min="0"
            max="5000"
            step="100"
            type="number"
          />
        </div>
      </div>
      <div>
        <BottomSection />
      </div>
    </form>
  );
}
