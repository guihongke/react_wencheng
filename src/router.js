import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Main from './components/SiderMenu/SiderMenu';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/main" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
