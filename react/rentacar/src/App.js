import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/home/';
import Find from './components/find/';
import Rent from './components/rent';

import './index.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/find'>
          <Find />
        </Route>
        <Route path='/rent'>
          <Rent />
        </Route>
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
