import { combineReducers } from 'redux';
import ArtistReducer from 'store/reducers/artistReducer';
import ArtsReducer from 'store/reducers/artsReducer';

import { store } from './createStore';

const rootReducer = combineReducers({
  ArtsReducer,
  ArtistReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
