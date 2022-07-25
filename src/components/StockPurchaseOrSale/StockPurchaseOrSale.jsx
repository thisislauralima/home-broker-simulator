import React, { useContext } from 'react';
import stockContext from '../../context/stockContext';
import tableInfo from '../../data/tableHeader';
import allStocks from '../../data/allStocks';
// import NegotiatedStocksMenu from '../NegotiatedStocksMenu/NegotiatedStocksMenu';

export default function StockPurchaseOrSale() {
  const {
    stockInfo,
  } = useContext(stockContext);

  return (
    <>
      <table>
        <caption>Minhas ações</caption>
        <caption>Comprar/ Vender Ação:</caption>
        <thead>
          <tr>
            {
              tableInfo.map((info) => (
                <th key={ info }>{ info }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
              allStocks.filter((stock) => (
                stock.id === stockInfo.id
              )).map((el) => (
                <tr key={ el.id }>
                  <td>{ el.name }</td>
                  <td>{ el.quantity }</td>
                  <td>{ el.price }</td>
                  <td>
                    <button
                      type="button"
                    >
                      C
                    </button>
                    <button
                      type="button"
                    >
                      V
                    </button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
      <div>
        <button type="button">Confirmar</button>
      </div>
      <div>
        <button type="button">Depósito</button>
        <button type="button">Retirada</button>
      </div>
    </>
  );
}
