import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        infoDetail: {
            display: 'flex',
            marginBottom: '5px',
        },
        infoDetailTitleTxt: {
            fontSize: '14px',
            textTransform: 'capitalize',
        },
        infoDetailTxt: {
            fontSize: '14px',
        },
    }
})

const InfoDetail = () => {
    const classes = useStyles();

    const age = new Date().getFullYear() - 1996;

    const infos = {
        residence: 'Malaysia',
        state: 'Selangor',
        age: age,
        email: 'jm96.chan@gmail.com',
    };

    return (
        Object.keys(infos).map((infoTitle, index) => (
            <Box className={classes.infoDetail} key={index}>
                <Typography className={classes.infoDetailTitleTxt} component='div' color='text.primary'>
                    {`${infoTitle}:`}
                </Typography>
                <Typography className={classes.infoDetailTxt} component='div' color='text.third' ml={'auto'}>
                    {infos[infoTitle]}
                </Typography>
            </Box>
        ))
    )
}

export default InfoDetail
