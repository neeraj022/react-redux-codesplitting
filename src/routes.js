// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

const AsyncIndex = asyncComponent(() => import('./components/App'));
const AsyncAbout = asyncComponent(() => import('./components/About'));
const AsyncNotFound = asyncComponent(() => import('./components/NotFound'));

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AsyncIndex} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route component={AsyncNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
