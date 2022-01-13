import { Box, useScrollTrigger, Zoom } from '@mui/material'
import React from 'react'

const ScrollTop = ({ children }) => {
    const trigger = useScrollTrigger();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={trigger}>
            <Box onClick={handleClick} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Zoom>
    );
}

export default ScrollTop
