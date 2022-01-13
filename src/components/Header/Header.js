import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HideOnScroll from '../../mui/HideOnScroll';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        header: {
        },
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <HideOnScroll>
            <AppBar className={classes.header} position="fixed" color="primary" sx={{ display: { lg: 'none' } }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header
