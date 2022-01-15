import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
    const size = 15;
    const timelineTopMargin = 10;

    return {
        experienceItem: {
            display: 'flex',
        },
        expTimelineTriangle: {
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '10px',
            borderColor: 'transparent',
            borderLeftColor: '#24252C',
            marginTop: `${size / 2}px`,
        },
        expTimeline: {
            position: 'relative',
            width: `${size}px`,
            flexShrink: 0,
        },
        expTimelineLine: {
            margin: 'auto',
            content: '""',
            width: '5px',
            height: '100%',
            backgroundColor: theme.palette.background.default,
            '$experienceItem:nth-child(2)  &': {
                height: `calc(100% - ${timelineTopMargin}px)`,
                marginTop: `${timelineTopMargin}px`,
            },
        },
        expTimelineCircle: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: `${timelineTopMargin}px`,
            margin: 'auto',
            display: 'flex',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: theme.palette.background.default,
            border: `3px solid ${theme.palette.secondary.main}`,
        },
        expContent: {
            backgroundImage: 'linear-gradient(159deg, rgb(36, 36, 46) 0%, rgb(36, 39, 41) 100%)',
            background: 'linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)',
            boxShadow: 'rgb(12 12 16 / 20%) 0px 3px 8px 0px',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexGrow: 1,
            marginBottom: theme.spacing(4),
            '$experienceItem:last-child &': {
                marginBottom: '0'
            },
        },
        expContentHeader: {
            width: '220px',
        },
        expContentTitleTxt: {
            fontSize: 14,
            fontWeight: 600,
        },
        expContentPositionTxt: {
            fontSize: 12,
        },
        expContentDate: {
            width: '155px',
            backgroundColor: '#1a1a22',
            borderRadius: '15px',
            padding: '5px 15px',
        },
        expContentDateTxt: {
            fontSize: 12,
        },
        expContentDetailTxt: {
            fontSize: 13,
        },
    }
})

const ExperienceItem = ({ title, position, date, detail }) => {
    const classes = useStyles();

    return (
        <Box className={classes.experienceItem}>
            <Box className={classes.expContent} p={4}>
                <Grid container justifyContent={'space-between'}>
                    <Grid item mr={2}>
                        <Box className={classes.expContentHeader}>
                            <Typography className={classes.expContentTitleTxt} color='text.primary' mb={0}>
                                {title}
                            </Typography>
                            <Typography className={classes.expContentPositionTxt} color='text.third' mb={2}>
                                {position}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.expContentDate} mb={2}>
                            <Typography className={classes.expContentDateTxt} color='text.third'>
                                {date}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography className={classes.expContentDetailTxt} color='text.third'>
                    {detail}
                </Typography>
            </Box>
            <Box className={classes.expTimelineTriangle} />
            <Box className={classes.expTimeline} ml={1}>
                <Box className={classes.expTimelineCircle} />
                <Box className={classes.expTimelineLine} />
            </Box>
        </Box>
    )
}

export default ExperienceItem
