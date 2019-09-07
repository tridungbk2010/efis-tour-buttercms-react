import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';

const Routes = props => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/p/:page" component={BlogHome} />
      <Route path="/post/:slug" component={BlogPost} />
    </Switch>
  </Router>
);

export default Routes;
