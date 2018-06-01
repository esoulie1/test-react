import { combineReducers } from 'redux';

import musicState from 'reducers/musicReducer';

const state = combineReducers({
  musicState,
});

export default state;
