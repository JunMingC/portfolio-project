import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        infoSkill: {
            '&:last-child': {
                marginBottom: '0'
            },
        },
        infoSkillTitleTxt: {
            fontSize: '14px',
            textTransform: 'capitalize',
        },
        infoSkillItem: {
            backgroundColor: 'transparent',
            border: '1px solid #c8960080',
            padding: '4px 8px 4px 8px',
            borderRadius: '4px',
        },
        infoSkillItemTxt: {
            fontSize: '12px',
            fontWeight: '500',
        }
    }
})

const InfoSkill = () => {
    const classes = useStyles();

    const skills = {
        'Programming': ['JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML', 'CSS'],
        'Front-End': ['ReactJS', 'Material-UI', 'Redux', 'Redux Toolkit'],
        'Back-End': ['Express.js', 'Node.js', 'SignalR', 'ASP.NET', 'ASP.NET Core', 'Google Cloud Platform'],
        'Tools': ['Git', 'SVN', 'Postman', 'Visual Studio Code', 'Unity'],
    };

    return (
        Object.keys(skills).map((skillTitle, index) => (
            <Box className={classes.infoSkill} key={index} mb={3}>
                <Typography className={classes.infoSkillTitleTxt} component='div' color='text.primary' mb={1}>
                    {skillTitle}
                </Typography>
                <Grid container justifyContent={'flex-start'} spacing={1.5}>
                    {
                        skills[skillTitle].map((skill, index) => (
                            <Grid item key={index}>
                                <Box className={classes.infoSkillItem}>
                                    <Typography className={classes.infoSkillItemTxt} component='div' color='text.fourth'>
                                        {skill}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        ))
    )
}

export default InfoSkill