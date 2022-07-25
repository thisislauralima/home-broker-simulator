import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../../context/stockContext';
import FormHeader from './Header/Header';
import FormLeftSide from './Form/LeftSideMenuForm/LeftSide';
import FormEndOperationBtn from './Form/EndOperationBtn/EndOperationBtn';
// import './negotiatedStocks.css';

export default function NegotiatedStocks({ isSaleBtnDisabled, isPersonalMenu }) {
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
      className="pb-4 rounded-xl bg-stock-purchase-or-buy-bg max-w-4xl min-w-[300px]"
    >
      <FormHeader isPersonalMenu={ isPersonalMenu } isSaleBtnDisabled={ isSaleBtnDisabled } />
      <div className="rounded-md font-bold text-boleta-form-gray">
        <FormLeftSide isPersonalMenu={ isPersonalMenu } />
        <FormEndOperationBtn isPersonalMenu={ isPersonalMenu } />
      </div>
    </section>
  );
}

NegotiatedStocks.propTypes = {
  isSaleBtnDisabled: PropTypes.bool,
  isPersonalMenu: PropTypes.string,
}.isRequired;
