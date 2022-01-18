
import { IconButton, Stack } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialStack = () => {
    return (
        <Stack direction="row" spacing={1} px={8} mb={3} mt={'auto'}>
            <IconButton
                color='white'
                edge='start'
                href={'https://www.linkedin.com/in/jun-ming-chan/'}
                target='_blank'
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                color='white'
                edge='start'
                href={'https://github.com/JunMingC'}
                target='_blank'
            >
                <GitHubIcon />
            </IconButton>
        </Stack>
    )
}

export default SocialStack