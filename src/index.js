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
        background: {
            default: '#191923'
        },
        text: {
            primary: '#ffffff',
            secondary: '#8c8c8e',
            highlight: '#ffc107'
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