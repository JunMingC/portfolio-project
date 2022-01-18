import { Box, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInfoBar } from '../../redux/features/infoBarSlice';
import InfoSection from './InfoSection/InfoSection';
import ResumeSection from './ResumeSection/ResumeSection';
import UserSection from './UserSection/UserSection';
import InfoBtn from '../Shared/InfoBtn/InfoBtn';
import { setOverlay } from '../../redux/features/overlaySlice';
import useAfterEffect from '../../hooks/useAfterEffect';
import useOutsideClick from '../../hooks/useOutsideClick';

const useStyles = makeStyles((theme) => {
    return {
        infoBar: {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '300px',
            backgroundColor: '#1D1D26',
            zIndex: 9999,
            boxShadow: 'rgb(12 12 16) 0px 0px 8px 0px',
            transform: 'translate(-100%, 0)',
            transition: 'transform .4s ease-in-out',
            [theme.breakpoints.up('lg')]: {
                height: `calc(100vh - ${theme.spacing(4)})`,
                transform: 'none',
            },
        },
        infoBarActive: {
            transform: 'none',
        },
        infoBarBtn: {
            position: 'absolute',
            right: '-12px',
            top: 0,
        },
    }
})

const InfoBar = () => {
    const classes = useStyles();
    const infoBar = useSelector((state) => state.infoBar);
    const dispatch = useDispatch();
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'), { noSsr: false });
    const { contentRef, registerListener, removeListener } = useOutsideClick(closeInfoBar);
    const firstRender = useRef(true);

    useAfterEffect(() => {
        if (firstRender.current) return;
        dispatch(setInfoBar({ active: false }));

    }, [dispatch, isLargeScreen])

    useEffect(() => {
        if (firstRender.current) return;

        dispatch(setOverlay({ active: infoBar.active }));
        if (infoBar.active) registerListener();
        else removeListener();

    }, [dispatch, infoBar, registerListener, removeListener])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
    }, []);

    function closeInfoBar() {
        dispatch(setInfoBar({ active: false }));
    }

    return (
        <Box className={`${classes.infoBar} ${infoBar.active ? classes.infoBarActive : ''}`} ref={contentRef}>
            <UserSection />
            <InfoSection />
            <ResumeSection />
            {
                !isLargeScreen &&
                <Box className={classes.infoBarBtn}>
                    <InfoBtn invert />
                </Box>
            }
        </Box>
    )
}

export default InfoBar
