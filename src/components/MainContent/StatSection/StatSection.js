import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        statSection: {
            height: '1500px',
        },
    }
})

const StatSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.statSection}>
            statSection
            {/* use MUI 5 grid */}
            {/* Years of Experience */}
            {/* 3.81 CGPA [First Class Honors] */}
            {/* Total Views after have backend */}
            {/* Current Views  */}
        </Box>
    )
}

export default StatSection
