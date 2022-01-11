import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        statSection: {

        },
    }
})

const StatSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.statSection}>
            statSection
            {/* use MUI 5 grid */}
        </Box>
    )
}

export default StatSection
