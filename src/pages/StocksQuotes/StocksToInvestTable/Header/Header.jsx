import React from 'react';
import tableInfo from '../../../../data/tableHeader';
import './header.css';

export default function StocksToInvestHeader() {
  return (
    <div id="main-table-header">
      <div id="main-table-title">
        <div>Ações para investir:</div>
        <button id="main-table-x-btn" type="button">X</button>
      </div>
      <table id="main-table-of-header">
        <thead>
          <tr>
            {
              tableInfo.map((info) => (
                <th width="200" className="t-headers" key={ info }>{ info }</th>
              ))
            }
          </tr>
        </thead>
      </table>
    </div>
  );
}
