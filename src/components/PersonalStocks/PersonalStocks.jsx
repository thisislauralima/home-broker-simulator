import React from 'react';

export default function PersonalStocks() {
  return (
    <table>
      <caption>Minhas ações</caption>
      {/* tr - table row */}
      <thead>
        <tr>
          {/* th - table headers, também são células, assim como a <td> */}
          <th>Ação</th>
          <th>Quantidade</th>
          <th>Valor(R$)</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* td - table data (célula) */}
          <td>AÇÃO UM</td>
          <td>100</td>
          <td>350,00</td>
          <td>
            <button type="button">C</button>
            <button type="button">V</button>
          </td>
        </tr>
        <tr>
          <td>AÇÃO DOIS</td>
          <td>60</td>
          <td>150,00</td>
          <td>
            <button type="button">C</button>
            <button type="button">V</button>
          </td>
        </tr>
        <tr>
          <td>AÇÃO TRES</td>
          <td>30</td>
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
