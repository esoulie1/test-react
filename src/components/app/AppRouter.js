import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Music from 'containers/MusicContainer';
import Prime from 'components/prime/Prime';
import Graph from 'components/graph/Graph';

class AppRouter extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/music' component={Music} exact/>
          <Route path='/prime' component={Prime} exact/>
          <Route path='/graph' component={Graph} exact/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
