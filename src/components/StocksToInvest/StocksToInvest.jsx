import React, { useContext } from 'react';
import allStocks from '../../data/allStocks';
import stockContext from '../../context/stockContext';
import './stocksToInvest.css';
import StocksToInvestHeader from '../StocksToInvestHeader/StocksToInvestHeader';

export default function StocksToInvest() {
  const {
    setStockInfo,
  } = useContext(stockContext);

  const saveStocksInfo = (id) => {
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
  };

  return (
    <main id="main-container-stocks">
      <div>
        <StocksToInvestHeader />
        <table id="all-stocks-table" cellSpacing="0">
          <tbody>
            {
              allStocks.map((stock) => (
                <tr
                  key={ stock.id }
                  onMouseMove={ () => saveStocksInfo(stock.id) }
                >
                  <td>{ stock.name }</td>
                  <td>{ stock.quantity }</td>
                  <td>{ stock.price }</td>
                  <td id="btns-home-broker">
                    <button
                      onClick={ () => saveStocksInfo(stock.id) }
                      className="invest-btn"
                      type="button"
                      id="pur-btn"
                    >
                      COMPRAR
                    </button>
                    <button
                      onClick={ () => saveStocksInfo(stock.id) }
                      className="invest-btn"
                      type="button"
                      id="sale-btn"
                    >
                      VENDER

                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
