import React, { useContext } from 'react';
import allStocks from '../../../data/allStocks';
import stockContext from '../../../context/stockContext';
import './stocksToInvestTable.css';
import StocksToInvestHeader from './StocksToInvestHeader/StocksToInvestHeader';

export default function StocksToInvest() {
  const {
    setStockInfo,
    setIsStockMenuRendered,
    // btnColor,
    setStockFinalPriceDecimal,
    setBtnColor,
  } = useContext(stockContext);

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor('goGreen');
    } else {
      setBtnColor('goYellow');
    }
  };
  const saveStocksInfo = (e, id) => {
    setStockFinalPriceDecimal(0.00);
    paintBtns(e);
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
    setIsStockMenuRendered(true);
  };

  return (
    <section>
      <StocksToInvestHeader />
      <table id="all-stocks-table" cellSpacing="0">
        <tbody>
          {
              allStocks.map((stock) => (
                <tr
                  key={ stock.id }
                >
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
                      COMPRAR
                    </button>
                    <button
                      onClick={ (e) => saveStocksInfo(e, stock.id) }
                      className="invest-btn"
                      type="button"
                      id="sale-btn"
                      name="sale-btn"
                    >
                      VENDER

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
