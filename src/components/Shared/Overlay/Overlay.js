import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => {
    return {
        overlay: overlayActive => ({
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 9998,
            backgroundColor: theme.palette.mainContent.main,
            transition: 'opacity .4s ease-in-out',
            opacity: `${overlayActive ? 0.9 : 0}`,
            pointerEvents: `${overlayActive ? 'auto' : 'none'}`,
            [theme.breakpoints.up('lg')]: {
                height: `calc(100vh - ${theme.spacing(4)})`,
                width: `calc(100% - ${theme.spacing(4)})`,
            },
        })
    }
})

const Overlay = () => {
    const overlayActive = useSelector((state) => state.overlay).active;
    const classes = useStyles(overlayActive);

    return (
        <Box className={classes.overlay} />
    )
}

export default Overlay
