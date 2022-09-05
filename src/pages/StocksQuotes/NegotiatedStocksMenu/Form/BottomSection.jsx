import React, { useContext } from 'react';
import stockContext from '../../../../context/stockContext';
import allStocks from '../../../../data/allStocks';

export default function BottomSection() {
  const {
    stockInfo,
    stockFinalPriceDecimal,
    btnColor,
  } = useContext(stockContext);

  return (
    <div className={ `text-boleta-form-gray flex justify-around w-full mt-3.5 pb-0 bg-${btnColor}` }>
      {
        stockInfo.length && allStocks.filter(
          (stock) => stock.id === stockInfo[0].id,
        ).map(({ price }) => <div key={ price }>{ `Valor do ativo: ${price}` }</div>)
      }
      <div className="text-boleta-form-gray">{ `Total: ${stockFinalPriceDecimal}` }</div>
    </div>
  );
}
