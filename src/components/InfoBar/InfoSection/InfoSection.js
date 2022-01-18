import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import InfoDetail from './InfoDetail/InfoDetail';
import InfoSkill from './InfoSkills/InfoSkills';

const useStyles = makeStyles((theme) => {
    return {
        infoSection: {
            flexGrow: 1,
            backgroundColor: '#1A1A22',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
               width: '8px',
            },
        },
        infoDivider: {
            width: '100%',
            height: '1px',
            minHeight: '1px',
            backgroundColor: '#2C2F36',
        },
    }
})

const InfoSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.infoSection} px={4} py={2}>
            <InfoDetail />
            <Box className={classes.infoDivider} my={2} />
            <InfoSkill />
        </Box>
    )
}

export default InfoSection
