import { Box, Grid } from '@mui/material';
import React from 'react'
import StatItem from './StatItem';

const StatSection = () => {
    const years = new Date().getFullYear() - 2018 - 1;

    return (
        <Box my={3}>
            <Grid container rowSpacing={2} columnSpacing={8}>
                <Grid item xs={12} sm={4}>
                    <StatItem
                        score={`${years} +`}
                        title={'Years Experience'}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatItem
                        score={'3.81'}
                        title={'CGPA'}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatItem
                        score={'5'}
                        title={'Personal Projects'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default StatSection