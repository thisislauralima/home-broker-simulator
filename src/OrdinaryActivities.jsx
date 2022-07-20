import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import pages from './pages';
import stockContext from './context/stockContext';

function OrdinaryActivities() {
  const { isUserLoggedIn } = useContext(stockContext);

  if (!isUserLoggedIn) return <Redirect to="/login" />;

  return (
    <Switch>
      <Route exact path="/acoes" component={ pages.StockList } />
      <Route exact path="acoes/cliente" component={ pages.PersonalStocks } />
      <Route exact path="/acoes/deposito/retirada" component={ pages.DepositOrWithdraw } />
      <Route exact path="*" component={ pages.NotFound } />
    </Switch>
  );
}

export default OrdinaryActivities;
