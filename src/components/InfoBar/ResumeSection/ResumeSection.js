
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme) => {
    return {
        resumeSection: {
            borderTop: 'solid 3px #191921',
            textTransform: 'capitalize',
            fontSize: '14px',
            fontWeight: 600,
            padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
        },
    }
})

const ResumeSection = () => {
    const classes = useStyles();

    return (
        <Button
            className={classes.resumeSection}
            variant='text'
            size='medium'
            color='white'
            endIcon={<DownloadIcon />}
            href='resume.pdf'
            download='Resume-ChanJunMing'
        >
            Download Resume
        </Button>
    )
}

export default ResumeSection