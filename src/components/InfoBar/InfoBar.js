import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        infoBar: {
            height: '100%',
            width: '300px',
            backgroundColor: '#24242E',
            display: 'flex',
            flexDirection: 'column',
        },
        userSection: {
            height: '240px',
        },
        infoSection: {
            backgroundColor: '#20202a',
            flexGrow: 1
        },
        resumeSection: {
            height: '50px',

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
