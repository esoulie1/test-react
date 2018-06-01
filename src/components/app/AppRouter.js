import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Prime from 'components/prime/Prime';

class AppRouter extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/prime' component={Prime} exact/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
