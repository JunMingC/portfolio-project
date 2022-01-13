import { Fab } from '@mui/material';
import ScrollTop from '../../mui/ScrollTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'

const ScrollBtn = () => {
    return (
        <ScrollTop>
            <Fab color="secondary" size="medium">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    )
}

export default ScrollBtn
