import React, { useContext } from 'react';
import stockContext from '../../../../context/stockContext';
import './header.css';

export default function Header() {
  const {
    btnColor,
    setBtnColor,
    isStockMenuRendered,
    setIsStockMenuRendered,
  } = useContext(stockContext);

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor('goGreen');
    } else {
      setBtnColor('goYellow');
    }
  };

  const closeStockMenu = () => {
    if (!isStockMenuRendered) {
      setIsStockMenuRendered(true);
    } else {
      setIsStockMenuRendered(false);
    }
  };

  return (
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
  );
}
