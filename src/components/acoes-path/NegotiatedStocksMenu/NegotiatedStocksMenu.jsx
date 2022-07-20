/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../../context/stockContext';
import './negotiatedStocksMenu.css';
import allStocks from '../../../data/allStocks';
import StockListToNegotiate from '../StockListToNegotiate/StockListToNegotiate';

export default function NegotiatedStocksMenu() {
  const [isStocksCodeRendered, setIsStocksCodeRendered] = useState(false);

  const {
    stockInfo,
    purchasedStockSale,
    setPurchasedStockSale,
    btnColor,
    setBtnColor,
    isStockMenuRendered,
    setIsStockMenuRendered,
  } = useContext(stockContext);

  const stockFinalPrice = ({ target: { value } }) => {
    const stockPrice = allStocks.filter(
      (stock) => stock.id === stockInfo[0].id,
    ).map(({ price }) => price);

    const finalStockPrice = stockPrice * Number(value);
    setPurchasedStockSale(finalStockPrice.toFixed(2));
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

  return (
    <section id="short-menu-section">
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
              className={ `${btnColor} short-menu-input` }
              min="0"
              type="number"
              onChange={ stockFinalPrice }
            />
          </label>
          <label htmlFor="shortMenuInput-3">
            Preço
            <input
              step=".01"
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
          <div>{ `Total: ${purchasedStockSale}` }</div>
        </div>
      </form>
      {/* -------------------------------------------------- */}
      <div id="send-order-btn-div">
        <button id="send-order-btn" type="button">ENVIAR ORDEM</button>
      </div>
      {/* </div> */}
    </section>
  );
}

NegotiatedStocksMenu.propTypes = {
  stockId: PropTypes.number,
}.isRequired;
