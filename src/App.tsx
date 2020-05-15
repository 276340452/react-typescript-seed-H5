import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { IRootState } from 'shared/reducers';
import './App.scss';
import AppRoutes from './routes';

const history = createBrowserHistory();
export interface IAppProps extends StateProps, DispatchProps {}

const App: React.FC = (props: IAppProps) => (
  <Router history={history}>
    <Switch>
      <Route>
        <AppRoutes />
      </Route>
    </Switch>
  </Router>
);
const mapStateToProps = (state:IRootState) => ({

});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
