import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import React from 'react';
import { Provider } from 'react-redux';
import './__tests__/testHelper';
import App from './components/App';
import reducer from './store/reducer';
import { watcher } from './store/sagas';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const saga = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(saga),
    devTools,
  ),
);
saga.run(watcher);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
