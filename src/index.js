import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

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
            main: '#C89600',
        },
        third: {
            main: '#A0988B',
        },
        fourth: {
            main: '#b79126',
        },
        background: {
            default: '#14141C'
        },
        text: {
            primary: '#E8E6E3',
            secondary: '#FFC71E',
            third: '#A0988B',
            fourth: '#c89600',
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);