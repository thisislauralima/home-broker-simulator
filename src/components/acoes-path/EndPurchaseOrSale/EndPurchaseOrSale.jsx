import React, { useContext } from 'react';
import stockContext from '../../../context/stockContext';

export default function EndPurchaseOrSale() {
  const {
    stockInfo,
    stockQuantity,
    stockFinalPriceDecimal,
    paidPriceForStock,
  } = useContext(stockContext);

  return (
    <div>
      <h3>FINALIZAR OPERAÇÃO</h3>
      <p>Empresa/ Código</p>
      {
          stockInfo.length && stockInfo.map((el) => <div key={ el.id }>{el.name}</div>)
      }
      <p>Preço</p>
      <p>{ paidPriceForStock }</p>
      <p>Quantidade</p>
      <p>{ stockQuantity }</p>
      <p>Valor investimento</p>
      <p>{ stockFinalPriceDecimal }</p>
      <button type="button">ENVIAR</button>
    </div>
  );
}
