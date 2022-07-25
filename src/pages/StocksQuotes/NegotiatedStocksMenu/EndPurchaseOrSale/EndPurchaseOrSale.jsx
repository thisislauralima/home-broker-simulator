import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stockContext from '../../../../context/stockContext';
import closeIcon from '../../../../images/close-icon.png';

export default function EndPurchaseOrSale() {
  const {
    stockInfo,
    stockFinalPriceDecimal,
    inputValueQuantityStock,
    setBoughtStocks,
    setIsPurchaseDone,
    setIsEndPurchaseOrSaleRendered,
    setIsMainTableRendered,
    setIsStockMenuRendered,
    setIsAskToInvest,
    boughtStocks,
  } = useContext(stockContext);

  const endPurchase = () => {
    setIsPurchaseDone(true);
    setBoughtStocks((prevState) => [...prevState,
      {
        id: uuidv4(),
        stockId: stockInfo[0].id,
        stockName: stockInfo[0].name,
        quantity: Number(inputValueQuantityStock),
        price: stockFinalPriceDecimal,
      }]);
    setIsPurchaseDone(true);
    setIsEndPurchaseOrSaleRendered(false);

    window.localStorage.setItem('boughtStocks', JSON.stringify([...boughtStocks, {
      id: uuidv4(),
      stockId: stockInfo[0].id,
      stockName: stockInfo[0].name,
      quantity: Number(inputValueQuantityStock),
      price: stockFinalPriceDecimal,
    }]));
  };

  const endOperation = () => {
    setIsEndPurchaseOrSaleRendered(false);
    setIsStockMenuRendered(false);
    setIsMainTableRendered(true);
    setIsAskToInvest(false);
  };

  return (
    <section className="bg-end-operation-gray-lighter  text-center text-end-operation-font-color-gray max-w-4xl mx-4 min-w-[300px] mt-10">
      <div className="flex justify-end">
        <button onClick={ endOperation } type="button">
          <img className="w-5 h-5 cursor-pointer" src={ closeIcon } alt="close-order-btn" />
        </button>
      </div>
      <h3 className="pb-4">
        FINALIZAR OPERAÇÃO
      </h3>
      <div className="py-10 pb-3 max-w-4xl min-w-[300px] text-black bg-end-operation-gray-darker">
        <div className="flex justify-center">
          <p>Empresa/ Código:</p>
          {
          stockInfo.length && stockInfo.map((el) => <div className="ml-1" key={ el.id }>{`${el.name} ${el.stockCode}`}</div>)
        }
        </div>
        <div className="flex justify-center">
          <p>Preço: </p>
          {
          stockInfo.length && stockInfo.map((el) => <div className="ml-1" key={ el.id }>{el.price}</div>)
        }
        </div>
        <div className="flex justify-center">
          <p>Quantidade:</p>
          <p className="ml-1">{ inputValueQuantityStock }</p>
        </div>
        <div className="flex justify-center">
          <p>Valor da operação:</p>
          <p className="ml-1">{ stockFinalPriceDecimal }</p>
        </div>
        <div className="py-10 pb-2 text-center">
          <button className="p-2.5 rounded-md bg-my-custom-blue text-white" onClick={ endPurchase } type="button">ENVIAR</button>
        </div>
      </div>
    </section>
  );
}
