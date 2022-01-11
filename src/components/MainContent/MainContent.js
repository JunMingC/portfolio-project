import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import BannerSection from './BannerSection/BannerSection';
import StatSection from './StatSection/StatSection';

const useStyles = makeStyles((theme) => {
    return {
        mainContent: {
            position: 'relative',
            flexGrow: 1,
            backgroundColor: '#1E1E28',
        },
        mainContentBg: {
            position: 'absolute',
            backgroundImage: 'url(bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '400px',
        },
        mainContentBgFade: {
            background: 'linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)',
            width: '100%',
            height: '100%',
        },
        content: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        },
        statSection: {

        },
        projectSection: {

        },
        experienceSection: {

        },
    }
})

const MainContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContent}>
            <Box className={classes.mainContentBg} >
                <Box className={classes.mainContentBgFade} />
            </Box>
            <Box className={classes.content} px={{ xs: 2, lg: 4 }}>
                <BannerSection />
                <StatSection />
                <Box className={classes.projectSection}>
                    projectSection
                </Box>
                <Box className={classes.experienceSection}>
                    experienceSection
                </Box>
            </Box>
        </Box>
    )
}

export default MainContent
