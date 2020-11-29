import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, State } from './root-reducer';
import sagas from './root-saga';
import initialState from './root-state';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
);

const store: Store<State> = createStore(
  rootReducer,
  initialState!,
  composeWithDevTools(enhancer),
);

sagaMiddleware.run(sagas);

export default store;
