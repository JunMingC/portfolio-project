import { AppBar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import HideOnScroll from '../../mui/HideOnScroll';
import React from 'react';
import InfoBtn from '../Shared/InfoBtn/InfoBtn';

const useStyles = makeStyles((theme) => {
    return {
        header: {
            [theme.breakpoints.up('lg')]: {
                display: 'none',
            },
        },
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <HideOnScroll>
            <AppBar className={classes.header} position="fixed" color="primary">
                <InfoBtn />
            </AppBar>
        </HideOnScroll>
    )
}

export default Header
