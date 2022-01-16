import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import InfoSection from './InfoSection/InfoSection';
import UserSection from './UserSection/UserSection';

const useStyles = makeStyles((theme) => {
    return {
        infoBar: {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '300px',
            backgroundColor: '#1D1D26',
            zIndex: 1,
            boxShadow: 'rgb(12 12 16) 0px 0px 8px 0px',
            transform: 'translate(-100%, 0)',
            transition: 'transform .4s ease-in-out',
            [theme.breakpoints.up('lg')]: {
                height: `calc(100vh - ${theme.spacing(4)})`,
                transform: 'none',
            },
        },
        resumeSection: {
            height: '50px',
            borderTop: 'solid 3px #191921',
        },
    }
})

const InfoBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.infoBar}>
            <UserSection />
            <InfoSection />
            <Box className={classes.resumeSection} py={2} px={4}>
                resumeSection
            </Box>
        </Box>
    )
}

export default InfoBar
