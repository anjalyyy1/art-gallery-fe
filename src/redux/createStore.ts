import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from 'store/sagas/index';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
