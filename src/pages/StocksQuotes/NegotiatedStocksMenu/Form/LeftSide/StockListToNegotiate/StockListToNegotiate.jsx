import React, { useContext } from 'react';
import allStocks from '../../../../../../data/allStocks';
import stockContext from '../../../../../../context/stockContext';
import './stockListToNegotiate.css';

export default function StockListToNegotiate() {
  const {
    setStockCode,
    stocksCode,
    setStockInfo,
    setIsStocksCodeRendered,
    setStockFinalPriceDecimal,
    inputValueQuantityStock,
    setInputValueQuantityStock,
    btnColor,
    isStocksCodeRendered,
    stockInfo,
    setInputValueStockCode,
    inputValueStockCode,
  } = useContext(stockContext);

  const calcStockFinalPrice = () => {
    const finalStockPrice = inputValueQuantityStock * stockInfo[0].price;
    setStockFinalPriceDecimal(finalStockPrice.toFixed(2));
  };

  const listStocksCodes = ({ target: { value } }) => {
    setInputValueStockCode(value);
    setIsStocksCodeRendered(true);
    const code = allStocks.filter(({ stockCode }) => (
      stockCode.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    if (value === '') {
      setStockCode([]);
      setIsStocksCodeRendered(false);
    } else {
      setStockCode(code);
    }
  };

  const saveStockInfo = ({ target: { value } }) => {
    setStockCode([]);
    const code = allStocks.filter((el) => el.stockCode === value);
    setStockInfo(code);
    setIsStocksCodeRendered(false);
    setInputValueQuantityStock(0);
    setInputValueStockCode(code[0].stockCode);
    calcStockFinalPrice();
  };

  return (
    <div>
      <input
        value={ inputValueStockCode }
        className={ `${btnColor} short-menu-input` }
        type="text"
        onInput={ (e) => listStocksCodes(e) }
      />
      {
        setStockInfo
        && isStocksCodeRendered && stocksCode.map((el) => (
          <button
            value={ el.stockCode }
            onClick={ saveStockInfo }
            type="button"
            key={ el.stockCode }
          >
            { el.stockCode }
          </button>
        ))
      }
    </div>
  );
}
