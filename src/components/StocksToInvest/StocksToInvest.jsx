import React from 'react';
import stocksToInvest from '../../data/stocksToInvest';
import tableInfo from '../../data/tableHeader';

export default function StocksToInvest() {
  return (
    <main>
      <table>
        <caption>Ações para investir:</caption>
        <thead>
          {
            tableInfo.map((info) => (
              <th>{ info }</th>
            ))
          }
        </thead>
        {
        stocksToInvest.map((stock) => (
          <tbody>
            <td>{ stock.name }</td>
            <td>{ stock.quantity }</td>
            <td>{ stock.price }</td>
            <td>
              <button type="button">C</button>
              <button type="button">V</button>
            </td>
          </tbody>
        ))
      }
      </table>
    </main>
  );
}
