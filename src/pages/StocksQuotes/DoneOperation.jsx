import React, { useContext } from 'react';
import doneIcon from '../../images/completed-icon.png';
import stockContext from '../../context/stockContext';

export default function DoneOperation() {
  const {
    setIsPurchaseDone,
    boughtStocks,
    setIsMainTableRendered,
  } = useContext(stockContext);

  const savePurchasedStocks = () => {
    setIsPurchaseDone(false);
    window.localStorage.setItem('boughtStocks', JSON.stringify(boughtStocks));
    setIsMainTableRendered(true);
  };

  return (
    <div className="ml-3 min-w-[300px] mx-4 mt-10">
      <div className="mx-4 flex justify-end pr-2 rounded-t-sm bg-green-operation-done">
        <button onClick={ savePurchasedStocks } type="button">X</button>
      </div>
      <div>
        <div className="mx-4 rounded-b-sm bg-green-operation-done">
          <div className="text-center text-xl">Operação efetuada!</div>
          <div className="flex justify-center pt-10 pb-10">
            <img className="w-1/6" src={ doneIcon } alt="operation-done-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
