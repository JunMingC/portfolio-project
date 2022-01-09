import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);