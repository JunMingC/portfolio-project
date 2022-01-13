import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

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
        userSection: {
            height: '240px',
            borderBottom: 'solid 3px #191921',
        },
        infoSection: {
            backgroundColor: '#1A1A22',
            flexGrow: 1
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
            <Box className={classes.userSection} py={2} px={4}>
                userSection
            </Box>
            <Box className={classes.infoSection} py={2} px={4}>
                infoSection
            </Box>
            <Box className={classes.resumeSection} py={2} px={4}>
                resumeSection
            </Box>
        </Box>
    )
}

export default InfoBar
