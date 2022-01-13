import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        statItem: {
            display: 'flex',
            alignItems: 'center',
        },
        statScoreTxt: {
            flexShrink: 0,
            fontSize: 22,
            fontWeight: 600,
        },
        statTitleTxt: {
            fontSize: 14,
        },
    }
})

const StatItem = ({ score, title }) => {
    const classes = useStyles();

    return (
        <Box className={classes.statItem}>
            <Typography className={classes.statScoreTxt} component='span' color='text.secondary' noWrap>
                {score}
            </Typography>
            <Typography className={classes.statTitleTxt} component='span' color='text.primary' ml={3}>
                {title}
            </Typography>
        </Box>
    )
}

export default StatItem
