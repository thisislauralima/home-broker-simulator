import React, { useContext } from 'react';
import allStocks from '../../../../../data/allStocks';
import stockContext from '../../../../../context/stockContext';

export default function StockListToNegotiate() {
  const {
    setStockCode,
    stocksCode,
    setStockInfo,
    setIsStocksCodeRendered,
    setStockFinalPriceDecimal,
    inputValueQuantityStock,
    setInputValueQuantityStock,
    isStocksCodeRendered,
    stockInfo,
    setInputValueStockCode,
    inputValueStockCode,
  } = useContext(stockContext);

  const calcStockFinalPrice = () => {
    const finalStockPrice = Number(inputValueQuantityStock) * stockInfo[0].price;
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
    <>
      <div className="text-boleta-form-gray">Cd. Ativo</div>
      <input
        value={ inputValueStockCode }
        className="text-white font-light w-40 border-none rounded-md short-menu-input bg-boleta-input-color"
        type="text"
        onInput={ (e) => listStocksCodes(e) }
      />
      {
        stockInfo
        && stocksCode[0] && isStocksCodeRendered

          && (
          <div className="pl-6 ml-10 relative inline-block text-left">
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-tr-md rounded-b-md shadow-lg bg-boleta-input-color ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1">
                {
                  stocksCode.map((el) => (
                    <div key={ el.stockCode }>
                      <button
                        value={ el.stockCode }
                        onClick={ saveStockInfo }
                        type="button"
                        key={ el.stockCode }
                        className="ml-1 text-custom-white"
                      >
                        { el.stockCode }
                      </button>
                    </div>
                  ))
                  }
              </div>
            </div>
          </div>
          )
        }
    </>
  );
}
