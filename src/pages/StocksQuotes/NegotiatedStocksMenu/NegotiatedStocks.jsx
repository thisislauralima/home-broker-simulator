import React, { useContext } from 'react';
import stockContext from '../../../context/stockContext';
import FormHeader from './Header/Header';
import FormLeftSide from './Form/LeftSide/LeftSide';
import FormEndOperationBtn from './Form/EndOperationBtn/EndOperationBtn';
import './negotiatedStocks.css';

export default function NegotiatedStocks() {
  const {
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
      onClick={ () => { } }
      onKeyUp={ closeStocksCodeList }
      id="short-menu-section"
      tabIndex={ 0 }
    >
      <FormHeader />
      <FormLeftSide />
      <FormEndOperationBtn />
    </section>
  );
}
