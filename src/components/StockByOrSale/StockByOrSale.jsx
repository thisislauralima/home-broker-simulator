import React from 'react';

export default function StockByOrSale() {
  return (
    <>
      <table>
        <caption>Minhas ações</caption>
        <caption>Comprar/ Vender Ação:</caption>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor(R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AÇÃO UM</td>
            <td>100</td>
            <td>350,00</td>
            <td />
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button">Comprar</button>
        <input type="text" placeholder="Informe o valor" />
        <button type="button">Vender</button>
        <input type="text" placeholder="Informe o valor" />
      </div>
      <div>
        <button type="button">Voltar</button>
        <button type="button">Confirmar</button>
      </div>
      <div>
        <button type="button">Depósito</button>
        <button type="button">Retirada</button>
      </div>
    </>
  );
}
