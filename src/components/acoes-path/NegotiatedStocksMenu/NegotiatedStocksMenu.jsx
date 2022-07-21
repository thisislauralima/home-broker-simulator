/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../../context/stockContext';
import './negotiatedStocksMenu.css';
import allStocks from '../../../data/allStocks';
import StockListToNegotiate from '../StockListToNegotiate/StockListToNegotiate';
import EndPurchaseOrSale from '../EndPurchaseOrSale/EndPurchaseOrSale';

export default function NegotiatedStocksMenu() {
  const {
    stockInfo,
    stockFinalPriceDecimal,
    setStockFinalPriceDecimal,
    btnColor,
    setBtnColor,
    isStockMenuRendered,
    setIsStockMenuRendered,
    setStockCode,
    setStockQuantity,
    setPaidPriceForStock,
    setIsPriceAndQuantityMissing,
    paidPriceForStock,
    IsPurchaseOrSaleDone,
    setIsPurchaseOrSaleDone,
    isPriceAndQuantityMissing,
    setIsStocksCodeRendered,
    isStocksCodeRendered,
  } = useContext(stockContext);

  const stockFinalPrice = ({ target: { value } }) => {
    setStockCode([]);
    const stockPrice = allStocks.filter(
      (stock) => stock.id === stockInfo[0].id,
    ).map(({ price }) => price);

    const finalStockPrice = stockPrice * Number(value);
    setStockQuantity(Number(value));
    setStockFinalPriceDecimal(finalStockPrice.toFixed(2));
  };

  const closeStockMenu = () => {
    if (!isStockMenuRendered) {
      setIsStockMenuRendered(true);
    } else {
      setIsStockMenuRendered(false);
    }
  };

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor('goGreen');
    } else {
      setBtnColor('goYellow');
    }
  };

  const renderStocksCode = () => {
    setIsStocksCodeRendered(true);
  };

  const closeStocksCodeList = (e) => {
    if (e.key === 'Escape') {
      setIsStocksCodeRendered(false);
    }
  };

  const endOperation = () => {
    if (!stockFinalPriceDecimal || !paidPriceForStock) {
      setIsPriceAndQuantityMissing(true);
      setIsPurchaseOrSaleDone(true);
    } else {
      setIsPurchaseOrSaleDone(true);
    }
  };

  const savePaidPrice = ({ target: { value } }) => {
    setPaidPriceForStock(value);
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
        !isPriceAndQuantityMissing && IsPurchaseOrSaleDone && <EndPurchaseOrSale />
      }
      {/* <div id="wrapper-container"> */}
      <header id="header-stock-section">
        <div>
          <button
            onClick={ paintBtns }
            className={ `${btnColor} saleOrPurchaseBtn` }
            // id="buy-stock-btn"
            type="button"
            name="buy-btn"
          >
            Comprar
          </button>
          <button
            onClick={ paintBtns }
            name="sale-btn"
            className={ `${btnColor} saleOrPurchaseBtn` }
            // id="sale-stock-btn"
            type="button"
          >
            Vender
          </button>
        </div>
        <button onClick={ closeStockMenu } type="button" id="close-short-menu">X</button>
      </header>
      <form className={ `${btnColor}` } id="form-stock-menu">
        {/* -------------------------------------------------- */}
        <div>
          <div>
            Ativo
            <input onClick={ renderStocksCode } className={ `${btnColor} short-menu-input` } />
            {
              isStocksCodeRendered && <StockListToNegotiate />
            }
          </div>
          <label className="input-label-short-menu" htmlFor="shortMenuInput-2">
            Quantidade
            <input
              onClick={ stockFinalPrice }
              className={ `${btnColor} short-menu-input` }
              min="0"
              type="number"
            />
          </label>
          <label htmlFor="shortMenuInput-3">
            Preço
            <input
              step="any"
              onClick={ savePaidPrice }
              className={ `${btnColor} short-menu-input` }
              min="0"
              type="number"
            />
          </label>
        </div>
        {/* -------------------------------------------------- */}
        <div>
          {
            stockInfo.length && stockInfo.map((el) => <div key={ el.id }>{el.name}</div>)
          }
          {
            stockInfo.length && allStocks.filter(
              (stock) => stock.id === stockInfo[0].id,
            ).map(({ price }) => <div key={ price }>{ price }</div>)
          }
          <div>{ `Total: ${stockFinalPriceDecimal}` }</div>
        </div>
      </form>
      {/* -------------------------------------------------- */}
      <div id="send-order-btn-div">
        <button onClick={ endOperation } id="send-order-btn" type="button">ENVIAR ORDEM</button>
      </div>
      {/* </div> */}
    </section>
  );
}

NegotiatedStocksMenu.propTypes = {
  stockId: PropTypes.number,
}.isRequired;
