import React from 'react';

export default function StocksToInvest() {
  return (
    <table>
      <caption>Ações para investir:</caption>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Quantidade</th>
          <th>Valor(R$)</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* td - table data (célula) */}
          <td>XPTO</td>
          <td>1</td>
          <td>350,00</td>
          <td>
            <button type="button">C</button>
            <button type="button">V</button>
          </td>
        </tr>
        <tr>
          <td>XPTO</td>
          <td>1</td>
          <td>150,00</td>
          <td>
            <button type="button">C</button>
            <button type="button">V</button>
          </td>
        </tr>
        <tr>
          <td>XPTO</td>
          <td>1</td>
          <td>450,00</td>
          <td>
            <button type="button">C</button>
            <button type="button">V</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
