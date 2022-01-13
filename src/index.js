import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#191921',
            contrastText: '#E8E6E3',
        },
        secondary: {
            main: '#C89600'
        },
        background: {
            default: '#14141C'
        },
        text: {
            primary: '#E8E6E3',
            secondary: '#FFC71E',
            third: '#A0988B',
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);