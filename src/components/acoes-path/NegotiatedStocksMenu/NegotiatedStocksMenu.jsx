import React, { useContext } from 'react';
import stockContext from '../../../context/stockContext';
import EndPurchaseOrSale from './EndPurchaseOrSale/EndPurchaseOrSale';
import HeaderStockMenu from './HeaderStockMenu/HeaderStockMenu';
import LeftSideStockMenuForm from './StockMenuForm/LeftSideStockMenuForm/LeftSideStockMenuForm';
import EndOperationBtn from './StockMenuForm/EndOperationBtn/EndOperationBtn';

import './negotiatedStocksMenu.css';

export default function NegotiatedStocksMenu() {
  const {
    isPriceAndQuantityMissing,
    setIsStocksCodeRendered,
  } = useContext(stockContext);

  const closeStocksCodeList = (e) => {
    if (e.key === 'Escape') {
      setIsStocksCodeRendered(false);
    }
  };

  return (
    <section
      role="button"
      onClick={ () => {} }
      onKeyUp={ closeStocksCodeList }
      id="short-menu-section"
      tabIndex={ 0 }
    >
      {
        !isPriceAndQuantityMissing && <EndPurchaseOrSale />
      }
      <HeaderStockMenu />
      <LeftSideStockMenuForm />
      <EndOperationBtn />
    </section>
  );
}
