import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        userSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: 'solid 3px #191921',
        },
        userAvatar: {
            width: '90px',
            height: '90px',
            marginBottom: theme.spacing(2),
        },
        userNameTxt: {
            fontSize: '15px',
            fontWeight: 600,
        },
        userDetailTxt: {
            fontSize: '14px',
        },
    }
})

const UserSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.userSection} p={3}>
            <Avatar className={classes.userAvatar} src="avatar.jpg" alt="Jun Ming" />
            <Typography className={classes.userNameTxt} color='text.primary' mb={1}>
                Chan Jun Ming
            </Typography>
            <Typography className={classes.userDetailTxt} color='text.third'>
                Web Developer
            </Typography>
            <Typography className={classes.userDetailTxt} color='text.third'>
                Full Stack
            </Typography>
        </Box>
    )
}

export default UserSection