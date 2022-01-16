import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
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
        programming: ['JavaScript', 'TypeScript', 'C#'],
        'web & database': ['HTML', 'CSS', 'SignalR', 'SQL (MS SQL Server)'],
        frameworks: ['ReactJS', 'Express.js', 'ASP.NET', 'ASP.NET Core'],
        tools: ['Git', 'SVN', 'Postman', 'Visual Studio', 'Visual Studio Code', 'Unity'],
    };

    return (
        Object.keys(skills).map((skillTitle, index) => (
            <Box key={index} mb={2}>
                <Typography className={classes.infoSkillTitleTxt} component='div' color='text.primary' mb={'5px'}>
                    {skillTitle}
                </Typography>
                <Grid container justifyContent={'flex-start'} spacing={1}>
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