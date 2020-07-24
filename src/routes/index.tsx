import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Home } from '../view/Home';
import { RoundRodin } from '../view/RoundRobin';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/round-robin" exact component={RoundRodin} />

      <Route path="/" exact component={() => <Redirect to="/home" />} />
    </Switch>
  </BrowserRouter>
);
