import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Login } />
      <Route exact path="/stock/list" component={ pages.StockList } />
    </Switch>
  );
}

export default App;
