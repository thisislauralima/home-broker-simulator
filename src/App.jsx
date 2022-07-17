import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ pages.Login } />
      <Route exact path="/acoes" component={ pages.StockList } />
      <Route exact path="/acoes/transacoes" component={ pages.StockBuyOrSale } />
      <Route exact path="/acoes/deposito/retirada" component={ pages.DepositOrWithdraw } />
      <Route exact path="*" component={ pages.NotFound } />
    </Switch>
  );
}

export default App;
