import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: { useNextVariants: true },
  });
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
