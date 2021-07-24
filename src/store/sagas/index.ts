import { all, fork } from 'redux-saga/effects';

import artistSaga from './artistSaga';
import artSaga from './artSaga';

const rootSaga = function* () {
  yield all([fork(artistSaga), fork(artSaga)]);
};

export default rootSaga;
