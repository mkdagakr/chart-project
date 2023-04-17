import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';

// import Geochart
import Geochart from './Geochart';
// impot Piechart
import Piechart from './Piechart';
// import Barchart
import Barchart from './Barchart';

const Analytics = () => {
    return (
        <>
            <Box height={70} />

            <Grid container spacing={3}>

                <Grid item xs={5}>
                    <Stack spacing={2}>
                        <Stack spacing={2} direction='row'>
                            <Card sx={{ minWidth: 49 + '%', height: 18 + 'vh' }} className='ordergradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ccd1d1' }}>
                                        Visitors
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                        <CountUp delay={0.4} end={24630} duration={1} />
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                        since last week
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ minWidth: 49 + '%', height: 18 + 'vh' }} className='earngradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ccd1d1' }}>
                                        Visitors
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                        <CountUp delay={0.4} end={2630} duration={1} />
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                        since last week
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>

                        <Stack spacing={2} direction='row'>
                            <Card sx={{ minWidth: 49 + '%', height: 18 + 'vh' }} className='ordergradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ccd1d1' }}>
                                        Visitors
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                        <CountUp delay={0.4} end={44630} duration={1} />
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                        since last week
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ minWidth: 49 + '%', height: 18 + 'vh' }} className='earngradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#ccd1d1' }}>
                                        Visitors
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                        <CountUp delay={0.4} end={22630} duration={1} />
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                        since last week
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Stack>

                </Grid>

                <Grid item xs={7}>
                    <Stack spacing={2} >
                        <Card sx={{ minWidth: 100 + '%', height: 38 + 'vh' }}>
                            <Barchart />
                        </Card>
                    </Stack>
                </Grid>

                <Box height={20} />

                <Grid item xs={8}>
                    <Card sx={{ height: 40 + "vh" }}>
                        <CardContent>
                            <Geochart />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 40 + "vh" }}>
                        <CardContent>
                            <Piechart />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default Analytics