import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Table from './Table';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/table'>
          <Table />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
