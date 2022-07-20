import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import pages from './pages';
import OrdinaryActivities from './OrdinaryActivities';

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
      {/* <Route exact path="/acoes" component={ pages.StockList } />
      <Route exact path="acoes/cliente" component={ pages.PersonalStocks } />
      <Route exact path="/acoes/deposito/retirada" component={ pages.DepositOrWithdraw } />
      <Route exact path="*" component={ pages.NotFound } /> */}
      {
        OrdinaryActivities()
      }
    </Switch>
  );
}

export default App;
