import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import environment from 'config/environment.json';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ 'modules/home'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => (
  <div>
    <Switch>
      <Route exact path={`${environment.PUBLIC_URL}/`} component={Home} />
    </Switch>
  </div>
);

export default Routes;
