import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import ProjectSection from './ProjectSection/ProjectSection';
import StatSection from './StatSection/StatSection';

const useStyles = makeStyles((theme) => {
    return {
        mainContent: {
            position: 'relative',
            flexGrow: 1,
            backgroundColor: '#181820',
            boxShadow: 'rgb(12 12 16) 0px 0px 8px 0px',
            transition: 'margin-left .4s ease-in-out',
            [theme.breakpoints.down('lg')]: {
                marginTop: theme.mixins.toolbar.minHeight,
            },
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
            background: 'linear-gradient(rgba(24, 24, 32, 0.93) 0%, rgba(24, 24, 32, 0.96) 70%, rgba(24, 24, 32, 0.99) 80%, rgb(24, 24, 32) 100%)',
            width: '100%',
            height: '100%',
        },
        content: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        },
    }
})

const MainContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContent} ml={{ lg: '300px' }}>
            <Box className={classes.mainContentBg} >
                <Box className={classes.mainContentBgFade} />
            </Box>
            <Box className={classes.content} px={{ xs: 2, lg: 4 }}>
                <BannerSection />
                <StatSection />
                <ProjectSection />
                <ExperienceSection />
            </Box>
        </Box>
    )
}

export default MainContent
