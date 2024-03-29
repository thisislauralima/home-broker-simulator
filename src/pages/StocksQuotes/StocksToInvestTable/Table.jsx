import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import allStocks from '../../../data/allStocks';
import stockContext from '../../../context/stockContext';
import Header from './Header/Header';
import AskToInvest from '../../PersonalStocks/AskToInvest';
import './table.css';

export default function Table({
  arrayToRender, tableHeigth,
  isPersonalTable,
}) {
  const {
    setStockInfo,
    setIsStockMenuRendered,
    setInputValueQuantityStock,
    setStockFinalPriceDecimal,
    setBtnColor,
    setInputValueStockCode,
    setIsMainTableRendered,
    setIsPersonalMenuOpened,
    setIsPersonalTableOpened,
  } = useContext(stockContext);

  const paintBtns = ({ target }) => {
    if (target.name === 'sale-btn') {
      setBtnColor({ lighter: 'boleta-lighter-green', darker: 'boleta-darker-green' });
    } else {
      setBtnColor({ lighter: 'boleta-lighter-yellow', darker: 'boleta-darker-yellow' });
    }
  };

  const saveInfoForPersonalStocks = (e, id) => {
    paintBtns(e);
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
    setIsPersonalTableOpened(false);
    setIsPersonalMenuOpened(true);
  };

  const saveStocksInfo = (e, id) => {
    if (isPersonalTable) {
      saveInfoForPersonalStocks(e, id);
      return;
    }
    setInputValueQuantityStock(0);
    setStockFinalPriceDecimal(0.00);
    paintBtns(e);
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
    setIsMainTableRendered(false);
    setIsStockMenuRendered(true);
    setInputValueStockCode('');
  };

  const allowStockSale = (e, id) => {
    saveInfoForPersonalStocks(e, id);
    setInputValueQuantityStock(0);
    setStockFinalPriceDecimal(0.00);
    paintBtns(e);
    const infos = allStocks.filter((stock) => stock.id === id).map((el) => el);
    setStockInfo(infos);
    setIsMainTableRendered(false);
    setIsStockMenuRendered(true);
    setInputValueStockCode('');
  };

  return (
    <table className="min-w-[300px] border-2 border-my-custom-gray w-full">
      <Header />
      <div className={ tableHeigth }>
        <tbody>
          {
          // eslint-disable-next-line array-callback-return
          arrayToRender !== null ? arrayToRender.map((stock) => (
            <tr className="h-2.5 min-w-[100px]" key={ stock.id }>
              <td className="p-3 w-2/6 text-center text-base">{ stock.name }</td>
              <td className="p-3 w-2/6 text-center text-base">{ stock.quantity }</td>
              <td className="p-3 w-2/6 text-center text-base">{ stock.price }</td>
              <td className="flex p-3 w-fit text-base">
                <button
                  className="p-3 text-center h-full rounded-lg bg-my-custom-pink-lighter"
                  type="button"
                  onClick={ (e) => saveStocksInfo(e, stock.id) }
                >
                  C

                </button>
                <button
                  className={ `${JSON.parse(JSON.parse(localStorage.getItem('boughtStocks')).map((el) => el.name).includes(stock.name)) ? 'bg-my-custom-purple-darker' : 'bg-unclickable-sale-btn'} p-3 h-full rounded-lg` }
                  type="button"
                  name="sale-btn"
                  disabled={ !JSON.parse(JSON.parse(localStorage.getItem('boughtStocks')).map((el) => el.name).includes(stock.name)) }
                  onClick={ (e) => allowStockSale(e, stock.id) }
                >
                  V

                </button>
              </td>
            </tr>
          ))
            : <AskToInvest />
        }
        </tbody>
      </div>
    </table>
  );
}

Table.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  arrayToRender: PropTypes.any,
  isBtnDisabled: PropTypes.bool,
  tableHeigth: PropTypes.string,
}.isRequired;
