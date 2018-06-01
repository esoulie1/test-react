import React, { PureComponent } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import AppRouter from 'components/app/AppRouter';
import { store, persistor } from 'store';

class AppProvider extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    )
  }
}

export default AppProvider;
