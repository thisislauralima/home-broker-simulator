import React, { useContext } from 'react';
import stockContext from '../../../../../context/stockContext';
import './endOperationBtn.css';

export default function EndOperationBtn() {
  const {
    stockFinalPriceDecimal,
    setIsPriceAndQuantityMissing,
    paidPriceForStock,
    setIsPurchaseOrSaleDone,
  } = useContext(stockContext);

  const endOperation = () => {
    if (!stockFinalPriceDecimal || !paidPriceForStock) {
      setIsPriceAndQuantityMissing(true);
      setIsPurchaseOrSaleDone(true);
    } else {
      setIsPriceAndQuantityMissing(false);
      setIsPurchaseOrSaleDone(true);
    }
  };

  return (
    <div id="send-order-btn-div">
      <button onClick={ endOperation } id="send-order-btn" type="button">ENVIAR ORDEM</button>
    </div>
  );
}
