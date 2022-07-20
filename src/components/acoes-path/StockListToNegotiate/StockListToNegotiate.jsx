import React, { useContext } from 'react';
import allStocks from '../../../data/allStocks';
import stockContext from '../../../context/stockContext';

export default function StockListToNegotiate() {
  const {
    setStockCode,
    stocksCode,
    setStockInfo,
    setPurchasedStockSale,
    setIsStocksCodeRenderedProvider,
  } = useContext(stockContext);

  const listStocksCodes = ({ target: { value } }) => {
    // setIsStocksCodeRendered(true);
    const code = allStocks.filter(({ stockCode }) => (
      stockCode.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    if (value === '') {
      setStockCode([]);
    } else {
      setStockCode(code);
    }
  };

  const saveStockInfo = ({ target: { value } }) => {
    setPurchasedStockSale(0);
    const code = allStocks.filter((el) => el.stockCode === value);
    setStockInfo(code);
    setIsStocksCodeRenderedProvider(false);
  };

  return (
    <div>
      <input type="text" onInput={ (e) => listStocksCodes(e) } />
      {
        stocksCode.map((el) => (
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
