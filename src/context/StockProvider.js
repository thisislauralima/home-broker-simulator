import React, { useState } from 'react';
import PropTypes from 'prop-types';
import stockContext from './stockContext';

export default function StocksProvider({ children }) {
  const [stockInfo, setStockInfo] = useState([]);
  const [iseUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [purchasedStockSale, setPurchasedStockSale] = useState(0);
  const [userInfo, setUserInfo] = useState({
    email: '', password: 0, lastAcess: '',
  });

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
    iseUserLoggedIn,
    setIsUserLoggedIn,
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
