import React, { useState } from 'react';
import PropTypes from 'prop-types';
import stockContext from './stockContext';

export default function StocksProvider({ children }) {
  const [accountBalance, setAccountBalance] = useState(0);
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [btnColor, setBtnColor] = useState('');
  const [btnColorDarker, setBtnColorDarker] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPurchaseDone, setIsPurchaseDone] = useState(false);
  const [isStocksCodeRendered, setIsStocksCodeRendered] = useState(false);
  const [isStockMenuRendered, setIsStockMenuRendered] = useState(false);
  const [stocksCode, setStockCode] = useState([]);
  const [stockInfo, setStockInfo] = useState([]);
  const [stockFinalPriceDecimal, setStockFinalPriceDecimal] = useState(0);
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '', password: '', lastAcess: '',
  });
  const [userEmail, setUserEmail] = useState('');
  const [inputValueQuantityStock, setInputValueQuantityStock] = useState(0);
  const [inputValueStockCode, setInputValueStockCode] = useState('');
  const [isDropBoxClicked, setIsDropBoxClicked] = useState(false);
  const [isEndPurchaseOrSaleRendered, setIsEndPurchaseOrSaleRendered] = useState(false);
  const [isAskToInvest, setIsAskToInvest] = useState(true);
  const [isMainTableRendered, setIsMainTableRendered] = useState(true);
  const [isPersonalMenuOpened, setIsPersonalMenuOpened] = useState(false);
  const [isPersonalTableOpened, setIsPersonalTableOpened] = useState(false);
  const [isSaleBtnDisabled, setIsSaleBtnDisabled] = useState(true);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    accountBalance,
    btnColor,
    btnColorDarker,
    boughtStocks,
    errorMessage,
    isAskToInvest,
    inputValueQuantityStock,
    inputValueStockCode,
    isDropBoxClicked,
    isMainTableRendered,
    isPersonalMenuOpened,
    isPersonalTableOpened,
    isPurchaseDone,
    isEndPurchaseOrSaleRendered,
    isSaleBtnDisabled,
    isStocksCodeRendered,
    isStockMenuRendered,
    stocksCode,
    stockInfo,
    stockFinalPriceDecimal,
    userId,
    userInfo,
    userEmail,
    setAccountBalance,
    setBoughtStocks,
    setBtnColor,
    setBtnColorDarker,
    setErrorMessage,
    setIsPersonalMenuOpened,
    setInputValueQuantityStock,
    setInputValueStockCode,
    setIsAskToInvest,
    setIsDropBoxClicked,
    setIsMainTableRendered,
    setIsPersonalTableOpened,
    setIsPurchaseDone,
    setIsEndPurchaseOrSaleRendered,
    setIsSaleBtnDisabled,
    setIsStocksCodeRendered,
    setIsStockMenuRendered,
    setStockCode,
    setStockInfo,
    setStockFinalPriceDecimal,
    setUserId,
    setUserInfo,
    setUserEmail,
  };

  return (
    <stockContext.Provider value={ values }>
      { children }
    </stockContext.Provider>
  );
}

StocksProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
