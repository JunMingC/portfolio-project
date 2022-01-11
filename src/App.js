import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import InfoBar from './components/InfoBar/InfoBar';
import MainContent from './components/MainContent/MainContent';

const useStyles = makeStyles((theme) => {
    return {
        master: {
            height: '100%',
            maxWidth: '1500px',
            display: 'flex',
        },
    }
})

const App = () => {
    const classes = useStyles();

    return (
        <Box className={classes.master} m={'auto'} p={{ lg: 2 }}>
            <InfoBar />
            <MainContent />
        </Box>
    );
}

export default App
