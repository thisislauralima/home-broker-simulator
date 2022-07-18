import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../context/stockContext';
import './shortStockMenu.css';
import allStocks from '../../data/allStocks';

export default function ShortStockMenu() {
  const {
    stockInfo,
    purchasedStockSale,
    setPurchasedStockSale,
  } = useContext(stockContext);

  const stockFinalPrice = ({ target: { value } }) => {
    setPurchasedStockSale(1);

    const stockPrice = allStocks.filter(
      (stock) => stock.id === stockInfo[0].id,
    ).map(({ price }) => price);

    const finalStockPrice = stockPrice * Number(value);
    setPurchasedStockSale(finalStockPrice.toFixed(2));
  };

  return (
    <section>
      <div id="wrapper-container">
        {
          stockInfo.length && stockInfo.map((el) => <p key={ el.id }>{el.name}</p>)
        }
        <nav>
          <button
            className="saleOrPurchaseBtn"
            type="button"
          >
            COMPRAR
          </button>
          <button
            className="saleOrPurchaseBtn"
            type="button"
          >
            VENDER
          </button>
        </nav>
        {
          stockInfo.length && allStocks.filter(
            (stock) => stock.id === stockInfo[0].id,
          ).map(({ price }) => price)
        }
        <div className="label-input">
          <input type="number" placeholder="Ativo" />
        </div>
        <div className="label-input">
          <input type="number" onClick={ stockFinalPrice } placeholder="Quantidade" />
        </div>
        <div className="label-input">
          <input type="number" placeholder="Preço" />
        </div>
        <p>{ `Total: ${purchasedStockSale}` }</p>
        <div id="div-button">
          <button id="sendOrder" type="button">ENVIAR ORDEM</button>
        </div>
      </div>
    </section>
  );
}

ShortStockMenu.propTypes = {
  stockId: PropTypes.number,
}.isRequired;
