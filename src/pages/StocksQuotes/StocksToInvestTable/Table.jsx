// import React, { useContext, useEffect } from 'react';
import React from 'react';

import allStocks from '../../../data/allStocks';
// import stockContext from '../../../context/stockContext';
import Header from './Header/Header';
import './table.css';

export default function Table() {
  // const {
  //   setStockInfo,
  //   setIsStockMenuRendered,
  //   setInputValueQuantityStock,
  //   setStockFinalPriceDecimal,
  //   setBtnColor,
  //   setInputValueStockCode,
  // } = useContext(stockContext);
  // const paintBtns = ({ target }) => {
  //   if (target.name === 'sale-btn') {
  //     setBtnColor('goGreen');
  //   } else {
  //     setBtnColor('goYellow');
  //   }
  // };
  // const saveStocksInfo = (e, id) => {
  //   setInputValueQuantityStock(0);
  //   setStockFinalPriceDecimal(0.00);
  //   paintBtns(e);
  //   const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
  //   setStockInfo(infos);
  //   setIsStockMenuRendered(true);
  //   setInputValueStockCode('');
  // };

  return (
  // <div className="overflow-y-auto max-h-96">
    <table className="w-2/4">
      <Header />
      <div className="overflow-y-scroll h-[380px] w-[400px]">
        <tbody className="h-3/6">
          {
          allStocks.map((stock) => (
            <tr className="min-w-[100px]" key={ stock.stockCode }>
              <td className="p-3 w-2/6 text-center text-sm">{ stock.name }</td>
              <td className="p-3 w-2/6 text-center text-sm">{ stock.quantity }</td>
              <td className="p-3 w-2/6 text-center text-sm">{ stock.price }</td>
              <td className="w-fit flex p-3 text-center text-sm">
                <button
                  className="w-5 h-fit rounded-lg bg-my-custom-pink-lighter hover:bg-my-custom-pink-darker"
                  type="button"
                >
                  C

                </button>
                <button
                  className="w-5 h-fit rounded-lg bg-my-custom-purple-darker"
                  type="button"
                  disabled
                >
                  V

                </button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </div>
    </table>
  // </div>
  );
}
