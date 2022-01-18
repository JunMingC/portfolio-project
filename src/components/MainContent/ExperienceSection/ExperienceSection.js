import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ExperienceItem from './ExperienceItem';

const useStyles = makeStyles((theme) => {
    return {
        experienceSection: {
            display: 'flex',
        },
        experienceItemTxt: {
            fontSize: 18,
            fontWeight: 600,
        },
    }
})

const ExperienceSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.experienceSection} my={3} mb={5}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography className={classes.experienceItemTxt} component='div' color='text.primary' mb={3}>
                            Education
                        </Typography>
                        <ExperienceItem
                            title={'Multimedia University'}
                            position={'Bachelor of Computer Science'}
                            date={'Jun. 2015 – Jun. 2018'}
                            detail={'Major in Game Development and graduated with CGPA of 3.81/first class honors.'}
                        />
                        <ExperienceItem
                            title={'Multimedia University'}
                            position={'Foundation in Information Technology'}
                            date={'Jun. 2014 – Jun. 2015'}
                            detail={'Graduated with CGPA of 3.71/first class honors.'}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography className={classes.experienceItemTxt} component='div' color='text.primary' mb={3}>
                            Work
                        </Typography>
                        <ExperienceItem
                            title={'NextOn IT Solutions Sdn. Bhd.'}
                            position={'IT Developer (Level II/ Intermediate)'}
                            date={'Oct. 2018 – May 2021'}
                            detail={'Hands-on experience in ASP.NET and ReactJS through rebuild & maintenance of existing company web applications.'}
                        />
                        <ExperienceItem
                            title={'Beuniq Sdn. Bhd.'}
                            position={'Game Programmer (Intern)'}
                            date={'Mar. 2017 – Jun. 2017'}
                            detail={'Hands-on experience in Unity by designing and developing game concept into demonstration product.'}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ExperienceSection