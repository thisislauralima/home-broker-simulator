import React, { useState } from 'react';
import PropTypes from 'prop-types';
import stockContext from './stockContext';

export default function StocksProvider({ children }) {
  const [stockInfo, setStockInfo] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [purchasedStockSale, setPurchasedStockSale] = useState(0);
  const [userInfo, setUserInfo] = useState({
    email: '', password: '', lastAcess: '',
  });
  const [accountBalance, setAccountBalance] = useState(1264.21);
  const [isStockMenuRendered, setIsStockMenuRendered] = useState(false);
  const [btnColor, setBtnColor] = useState('');
  const [stocksCode, setStockCode] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [isStocksCodeRenderedProvider, setIsStocksCodeRenderedProvider] = useState(false);
  const [stockQuantity, setStockQuantity] = useState(0);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    userId,
    setUserId,
    stockInfo,
    setStockInfo,
    purchasedStockSale,
    setPurchasedStockSale,
    userInfo,
    setUserInfo,
    isUserLoggedIn,
    setIsUserLoggedIn,
    accountBalance,
    setAccountBalance,
    isStockMenuRendered,
    setIsStockMenuRendered,
    btnColor,
    setBtnColor,
    stocksCode,
    setStockCode,
    userEmail,
    setUserEmail,
    isStocksCodeRenderedProvider,
    setIsStocksCodeRenderedProvider,
    stockQuantity,
    setStockQuantity,
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
