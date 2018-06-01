import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import indexReducer from 'reducers/index';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  debug: process.env.NODE_ENV !== 'production',
};

const persistedReducer = persistReducer(persistConfig, indexReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
