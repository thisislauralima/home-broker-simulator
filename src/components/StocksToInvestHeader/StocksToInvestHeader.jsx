import React from 'react';
import tableInfo from '../../data/tableHeader';
import './stocksToInvestHeader.css';

export default function StocksToInvestHeader() {
  return (
    <table>
      <caption id="stocks-list-caption">Ações para investir:</caption>
      <thead>
        <tr>
          {
          tableInfo.map((info) => (
            <th className="t-headers" key={ info }>{ info }</th>
          ))
          }
        </tr>
      </thead>
    </table>
  );
}
