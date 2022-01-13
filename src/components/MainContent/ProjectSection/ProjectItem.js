import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        projectItem: {
            backgroundImage: 'linear-gradient(159deg, rgb(36, 36, 46) 0%, rgb(36, 39, 41) 100%)',
            background: 'linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)',
            boxShadow: 'rgb(12 12 16 / 20%) 0px 3px 8px 0px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        projectTitleTxt: {
            fontSize: 16,
            fontWeight: 600,
        },
        projectDescriptionTxt: {
            fontSize: 14,
        },
        projectToolsTxt: {
            fontSize: 12,
            fontWeight: 600,
        },
        projectButton: {
            display: 'flex',
            alignItems: 'center',
        },
        projectButtonIcon: {
            width: 14,
            height: 14,
        },
    }
})

const ProjectItem = ({ title, description, tools, link }) => {
    const classes = useStyles();

    return (
        <Box className={classes.projectItem} p={4}>
            <Typography className={classes.projectTitleTxt} color='text.primary' mb={3}>
                {title}
            </Typography>
            <Typography className={classes.projectDescriptionTxt} color='text.third' mb={3}>
                {description}
            </Typography>
            <Typography className={classes.projectToolsTxt} color='text.third' mb={3} mt={'auto'}>
                {tools}
            </Typography>
            <Button
                className={classes.projectButton}
                variant='outlined'
                color='secondary'
                size='small'
                endIcon={<ArrowForwardIosIcon className={classes.projectButtonIcon} />}
                href={link}
            >
                GITHUB
            </Button>
        </Box>
    )
}

export default ProjectItem
