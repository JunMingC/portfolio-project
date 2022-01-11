import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        bannerSection: {
            position: 'relative',
            width: '100%',
            minHeight: '300px',
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
            background: 'linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)',
            width: '100%',
            height: '100%',
        },
        bannerContent: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        },
    }
})

const BannerSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bannerSection} mt={8}>
            <Box className={classes.banner}>
                <Box className={classes.bannerFade} />
            </Box>
            <Box className={classes.bannerContent}>
                <Box>bannerSection</Box>
                <Box>bannerSection</Box>
                <Box>bannerSection</Box>
            </Box>
        </Box>
    )
}

export default BannerSection
