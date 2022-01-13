import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react'

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default HideOnScroll
