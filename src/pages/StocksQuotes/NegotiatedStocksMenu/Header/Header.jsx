import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import stockContext from '../../../../context/stockContext';
import './header.css';
import closeIcon from '../../../../images/close-icon.png';

export default function Header({ isSaleBtnDisabledProp, isPersonalMenu, isPersonalTable }) {
  const {
    btnColor,
    setBtnColor,
    isStockMenuRendered,
    setIsStockMenuRendered,
    stockInfo,
    setIsMainTableRendered,
    isPersonalMenuOpened,
    setIsPersonalMenuOpened,
    setIsPersonalTableOpened,
    isSaleBtnDisabled,
    setBtnColorDarker,
  } = useContext(stockContext);

  useEffect(() => {
    if (btnColor === 'my-custom-yellow') {
      setBtnColorDarker('boleta-darker-yellow');
    } else {
      setBtnColorDarker('boleta-darker-green');
    }
  }, [btnColor]);

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor('my-custom-green');
    } else {
      setBtnColor('my-custom-yellow');
    }
  };

  const renderPersonalTable = () => {
    if (isPersonalMenuOpened) {
      setIsPersonalMenuOpened(false);
      setIsPersonalTableOpened(true);
    } else {
      setIsPersonalMenuOpened(true);
      setIsPersonalTableOpened(false);
    }
  };

  const closeStockMenu = () => {
    if (isPersonalMenu || isPersonalTable) {
      renderPersonalTable();
      return;
    }
    if (!isStockMenuRendered) {
      setIsStockMenuRendered(true);
      setIsMainTableRendered(false);
    } else {
      setIsStockMenuRendered(false);
      setIsMainTableRendered(true);
    }
  };

  return (
    <header className="mb-0 m-2">
      <div className="font-extrabold flex justify-between">
        <div className="flex text-close-btn-gray m-2">
          <div>BOLETA</div>
          <div className="text-boleta-orange mx-2">{ stockInfo[0].stockCode }</div>
          {
            stockInfo.length && stockInfo.map((el) => (
              <div
                className="text-boleta-orange"
                key={ el.id }
              >
                {el.name}
              </div>
            ))
          }
        </div>
        <button
          onClick={ closeStockMenu }
          type="button"
          id="close-short-menu"
          className="w-5"
        >
          <img src={ closeIcon } alt="close-btn" />
        </button>
      </div>
      <button
        onClick={ paintBtns }
        className={ `font-extrabold mb-0 ${btnColor} py-2 saleOrPurchaseBtn p-10  rounded-t-lg` }
        type="button"
        name="buy-btn"
      >
        Compra
      </button>
      <button
        onClick={ paintBtns }
        name="sale-btn"
        type="button"
        className={ `${btnColor} font-extrabold mb-0 py-2 p-10 rounded-t-lg m-2` }
        disabled={ isSaleBtnDisabled || isSaleBtnDisabledProp }
      >
        Venda
      </button>
    </header>
  );
}

Header.propTypes = {
  isSaleBtnDisabledProp: PropTypes.bool,
  isPersonalMenu: PropTypes.string,
  isPersonalTable: PropTypes.string,
}.isRequired;
