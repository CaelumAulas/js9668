import React from 'react';
import ReactDOM from 'react-dom';
import MinhaAgenda from './MinhaAgenda';
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MinhaAgenda />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
