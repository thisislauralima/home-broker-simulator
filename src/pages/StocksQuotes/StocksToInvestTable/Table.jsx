import React, { useContext } from 'react';
import allStocks from '../../../data/allStocks';
import stockContext from '../../../context/stockContext';
import Header from './Header/Header';
import './table.css';

export default function Table() {
  const {
    setStockInfo,
    setIsStockMenuRendered,
    setInputValueQuantityStock,
    setStockFinalPriceDecimal,
    setBtnColor,
    setInputValueStockCode,
  } = useContext(stockContext);

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor('goGreen');
    } else {
      setBtnColor('goYellow');
    }
  };
  const saveStocksInfo = (e, id) => {
    setInputValueQuantityStock(0);
    setStockFinalPriceDecimal(0.00);
    paintBtns(e);
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
    setIsStockMenuRendered(true);
    setInputValueStockCode('');
  };

  return (
    <section>
      <Header />
      <table id="all-stocks-table" cellSpacing="0">
        <tbody>
          {
              allStocks.map((stock) => (
                <tr
                  key={ stock.id }
                >
                  <td width="200">{ stock.stockCode }</td>
                  <td width="200">{ stock.name }</td>
                  <td width="200">{ stock.quantity }</td>
                  <td width="200">{ stock.price }</td>
                  <td width="200">
                    <button
                      onClick={ (e) => saveStocksInfo(e, stock.id) }
                      className="invest-btn"
                      type="button"
                      id="pur-btn"
                      name="buy-btn"
                    >
                      C
                    </button>
                    <button
                      onClick={ (e) => saveStocksInfo(e, stock.id) }
                      className="invest-btn"
                      type="button"
                      id="sale-btn"
                      name="sale-btn"
                      disabled
                    >
                      V

                    </button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </section>
  );
}
