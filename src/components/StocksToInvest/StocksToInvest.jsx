import React from 'react';
import { useHistory } from 'react-router-dom';
import stocksToInvest from '../../data/stocksToInvest';
import tableInfo from '../../data/tableHeader';

export default function StocksToInvest() {
  const history = useHistory();

  const goToStockOrBuySalePage = () => {
    history.push('acoes/transacoes');
  };

  return (
    <main>
      <table>
        <caption>Ações para investir:</caption>
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
            stocksToInvest.map((stock) => (
              <tr key={ stock.id }>
                <td>{ stock.name }</td>
                <td>{ stock.quantity }</td>
                <td>{ stock.price }</td>
                <td>
                  <button onClick={ goToStockOrBuySalePage } type="button">C</button>
                  <button type="button">V</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
}
