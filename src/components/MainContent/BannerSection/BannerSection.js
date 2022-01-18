import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
import React from 'react';
import SocialStack from './SocialStack';

const useStyles = makeStyles((theme) => {
    return {
        bannerSection: {
            position: 'relative',
            width: '100%',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                minHeight: '380px',
            },
        },
        banner: {
            position: 'absolute',
            backgroundImage: 'url(bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        },
        bannerFade: {
            background: 'linear-gradient(90deg, rgba(36, 36, 46, 0.9) 15%, rgba(36, 36, 46, 0.7) 50%, rgba(36, 39, 41, 0.7) 100%)',
            width: '100%',
            height: '100%',
        },
        bannerContent: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        },
        bannerContentTitleTxt: {
            fontSize: '36px',
            fontWeight: 800,
        },
        bannerContentDetailTxt: {
            fontSize: '16px',
        }
    }
})

const BannerSection = () => {
    const classes = useStyles();
    const writerText = ['Hello World.', 'I am Full Stack Web Developer.', 'Front-End Web Developer.', 'Back-End Web Developer.', 'Game Developer.'];

    const typeWriter = (typewriter) => {
        typewriter.changeDeleteSpeed(10)
            .typeString(writerText[0])
            .pauseFor(2500)
            .deleteChars(writerText[0].length)
            .pauseFor(500)
            .typeString(writerText[1])
            .pauseFor(2500)
            .deleteChars(writerText[1].length - 5)
            .pauseFor(500)
            .typeString(writerText[2])
            .pauseFor(2500)
            .deleteChars(writerText[2].length)
            .pauseFor(500)
            .typeString(writerText[3])
            .pauseFor(2500)
            .deleteChars(writerText[3].length)
            .pauseFor(500)
            .typeString(writerText[4])
            .pauseFor(2500)
            .start();
    }

    return (
        <Box className={classes.bannerSection} mt={8}>
            <Box className={classes.banner}>
                <Box className={classes.bannerFade} />
            </Box>
            <Box className={classes.bannerContent} p={8} pb={2}>
                <Typography className={classes.bannerContentTitleTxt} color='text.primary' mb={2}>
                    Welcome to my Portfolio!
                </Typography>
                <Typography className={classes.bannerContentDetailTxt} component={'span'} color='text.secondary'>
                    <Typewriter
                        onInit={typeWriter}
                        options={{
                            loop: true,
                        }}
                    />
                </Typography>
            </Box>
            <SocialStack />
        </Box>
    )
}

export default BannerSection
