import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoBar from './components/InfoBar/InfoBar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        master: {
            position: 'relative',
            maxWidth: '1500px',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                '&::after, &::before': {
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    zIndex: 2,
                    background: "#14141C",
                    width: '100%',
                    height: theme.spacing(2),
                    content: '""',
                },
                '&::before': {
                    top: 0,
                },
            },
        },
    }
})

const App = () => {
    const classes = useStyles();

    return (
        <Box className={classes.master} m={'auto'} p={{ lg: 2 }}>
            <Header />
            <InfoBar />
            <MainContent />
            <ScrollBtn />
        </Box>
    );
}

export default App
