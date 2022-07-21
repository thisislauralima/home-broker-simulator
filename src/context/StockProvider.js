import React, { useState } from 'react';
import PropTypes from 'prop-types';
import stockContext from './stockContext';

export default function StocksProvider({ children }) {
  const [accountBalance, setAccountBalance] = useState(1264.21);
  const [btnColor, setBtnColor] = useState('');
  const [isPriceAndQuantityMissing, setIsPriceAndQuantityMissing] = useState(true);
  const [isPurchaseOrSaleDone, setIsPurchaseOrSaleDone] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isStocksCodeRendered, setIsStocksCodeRendered] = useState(false);
  const [isStockMenuRendered, setIsStockMenuRendered] = useState(false);
  const [stocksCode, setStockCode] = useState([]);
  const [stockInfo, setStockInfo] = useState([]);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockFinalPriceDecimal, setStockFinalPriceDecimal] = useState(0);
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '', password: '', lastAcess: '',
  });
  const [userEmail, setUserEmail] = useState('');
  const [paidPriceForStock, setPaidPriceForStock] = useState(0);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    accountBalance,
    btnColor,
    isPriceAndQuantityMissing,
    isPurchaseOrSaleDone,
    isUserLoggedIn,
    isStocksCodeRendered,
    isStockMenuRendered,
    stocksCode,
    stockInfo,
    stockFinalPriceDecimal,
    stockQuantity,
    userId,
    userInfo,
    userEmail,
    paidPriceForStock,
    setAccountBalance,
    setBtnColor,
    setIsPriceAndQuantityMissing,
    setIsPurchaseOrSaleDone,
    setIsUserLoggedIn,
    setIsStocksCodeRendered,
    setIsStockMenuRendered,
    setStockCode,
    setStockInfo,
    setStockQuantity,
    setStockFinalPriceDecimal,
    setUserId,
    setUserInfo,
    setUserEmail,
    setPaidPriceForStock,
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
