import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ProjectItem from './ProjectItem';

const useStyles = makeStyles((theme) => {
    return {
        projectSection: {
            display: 'flex',
            flexDirection: 'column',
        },
        projectSectionTxt: {
            fontSize: 18,
            fontWeight: 600,
        },
    }
})

const ProjectSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.projectSection}>
            <Typography className={classes.projectSectionTxt} component='span' color='text.primary' mb={3}>
                My Projects
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectItem
                        title={'Portfolio'}
                        description={"Front-End Web Application personalized to showcase user's skills, qualifications, education and work experiences in a creative way."}
                        tools={'ReactJS, Material-UI'}
                        link={'https://github.com/JunMingC/portfolio-project'}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectItem
                        title={'Memories'}
                        description={'Full Stack MERN Application for a simple social media app that allows users to post interesting events happened in their lives.'}
                        tools={'MongoDB, Express.js, ReactJS, Node.js'}
                        link={'https://github.com/JunMingC/memories_project'}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectItem
                        title={'MagicaWorld'}
                        description={"AR/VR Game that utilizes the player's position in actual space to create a unique combat system that encourages body movement."}
                        tools={'Unity, Vuforia SDK'}
                        link={'https://github.com/JunMingC/MagicaWorld'}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectItem
                        title={'HyperDash'}
                        description={'VR Game in an immersive 3D environment that allows movement in all direction while battling endlessly for survival.'}
                        tools={'Unity, Google VR SDK'}
                        link={'https://github.com/JunMingC/HyperDash'}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectItem
                        title={'Torch Hallway'}
                        description={'Horror Game that make use of light system and spatial sound system to create a thrilling maze escape experience.'}
                        tools={'Unity'}
                        link={'https://github.com/JunMingC/Torch-Hallway'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectSection
