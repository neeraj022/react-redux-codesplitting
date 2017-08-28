// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import asyncComponent from './components/AsyncComponent';
import Loadable from 'react-loadable';
import MyLoadingComponent from './components/MyLoadingComponent';

var AsyncIndex = Loadable({
  loader: () => import('./components/App'),
  loading: MyLoadingComponent
});
const AsyncAbout = Loadable({
  loader: () => import('./components/About'),
  loading: MyLoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: MyLoadingComponent
});

// const AsyncIndex = asyncComponent(() => import('./components/App'));
// const AsyncAbout = asyncComponent(() => import('./components/About'));
// const AsyncNotFound = asyncComponent(() => import('./components/NotFound'));

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
