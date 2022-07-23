import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stockContext from '../../../../context/stockContext';

export default function EndPurchaseOrSale() {
  const {
    stockInfo,
    stockFinalPriceDecimal,
    inputValueQuantityStock,
    setBoughtStocks,
    boughtStocks,
    setIsPurchaseDone,
    setIsEndPurchaseOrSaleRendered,
  } = useContext(stockContext);

  const endPurchase = () => {
    setIsPurchaseDone(true);
    setBoughtStocks((prevState) => [...prevState,
      {
        id: uuidv4(),
        stockId: stockInfo[0].id,
        stockName: stockInfo[0].name,
        quantity: inputValueQuantityStock,
        price: stockFinalPriceDecimal,
      }]);
    setIsPurchaseDone(true);
    setIsEndPurchaseOrSaleRendered(false);
  };

  useEffect(() => {
    localStorage.setItem('boughtStock', JSON.stringify(boughtStocks));
  }, [boughtStocks]);

  return (
    <div>
      <h3>FINALIZAR OPERAÇÃO</h3>
      <p>Empresa/ Código</p>
      {
        stockInfo.length && stockInfo.map((el) => <div key={ el.id }>{el.name}</div>)
      }
      <p>Preço</p>
      {
        stockInfo.length && stockInfo.map((el) => <div key={ el.id }>{el.price}</div>)
      }
      <p>Quantidade</p>
      <p>{ inputValueQuantityStock }</p>
      <p>Valor investimento</p>
      <p>{ stockFinalPriceDecimal }</p>
      <button onClick={ endPurchase } type="button">ENVIAR</button>
    </div>
  );
}
