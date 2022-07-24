import React, { useEffect, useState } from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import pages from './pages';

function App() {
  const [renderLogin, setRenderLogin] = useState(false);

  useEffect(() => {
    setRenderLogin(true);
  }, []);

  return (
    <Switch>
      <Route exact path="/login" component={ pages.Login } />
      <Route
        exact
        path="/"
        render={ () => (
          renderLogin && <Redirect to="/login" />
        ) }
      />
      <Route exact path="/acoes/carteira" component={ pages.PersonalStocks } />
      <Route exact path="/acoes/transacoes" component={ pages.DepositOrWithdraw } />
      <Route exact path="/acoes" component={ pages.stocksQuotes } />
      <Route exact path="*" component={ pages.NotFound } />
    </Switch>
  );
}

export default App;
