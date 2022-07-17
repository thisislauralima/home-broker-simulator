import React, { useContext } from 'react';
import stockContext from '../../context/stockContext';
import tableInfo from '../../data/tableHeader';
import stocksToInvest from '../../data/stocksToInvest';

export default function StockBuyOrSale() {
  const { stockId } = useContext(stockContext);
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
              stocksToInvest.filter((stock) => (
                stock.id === stockId
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
                    <button type="button">V</button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
      <div>
        <div>
          <button type="button">Comprar</button>
          <input type="text" placeholder="Informe o valor" />
        </div>
        <div>
          <button type="button">Vender</button>
          <input type="text" placeholder="Informe o valor" />
        </div>
      </div>
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
