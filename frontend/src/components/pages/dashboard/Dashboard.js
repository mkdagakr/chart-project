import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CountUp from 'react-countup';

// import Accordion
import AccordionList from './AccordionList';
// import Barchart
import Barchart from '../dashboard/Barchart';


const Dashboard = () => {

    return (
        <>
            <Box height={70} />

            <Grid container spacing={2}>

                <Grid item xs={8}>
                    <Stack spacing={2} direction='row'>
                        <Card sx={{ minWidth: 49 + '%', height: 153 }} className='ordergradient'>
                            <CardContent>
                                <div className='iconstyle'>
                                    <FactCheckIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                    Rs. <CountUp delay={0.3} end={50} duration={0.6} /> crore
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                    Total Orders
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ minWidth: 49 + '%', height: 153 }} className='earngradient'>
                            <CardContent>
                                <div className='iconstyle'>
                                    <AssuredWorkloadIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                    Rs. <CountUp delay={0.3} end={90} duration={0.6} /> crore
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                    Total Earnings
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>

                <Grid item xs={4}>
                    <Stack spacing={2} >
                        <Card sx={{ maxWidth: 345 }} className='earngradient'>
                            <Stack spacing={2} direction='row'>
                                <div className='iconstyle'>
                                    <CurrencyRupeeIcon />
                                </div>
                                <div className='paddingall'>
                                    <span className='price'>Rs. 203 crore</span>
                                    <br />
                                    <span className='pricetitle'>Total Income</span>
                                </div>
                            </Stack>
                        </Card>

                        <Card sx={{ maxWidth: 345 }}>
                            <Stack spacing={2} direction='row'>
                                <div className='iconstyleblack'>
                                    <CurrencyRupeeIcon />
                                </div>
                                <div className='paddingall'>
                                    <span className='price'>Rs. 203 crore</span>
                                    <br />
                                    <span className='pricetitle'>Total Income</span>
                                </div>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>

                <Box height={20} />

                <Grid item xs={8}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                        <Barchart />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                            <div className='paddingall'>
                                <span className='price'>Popular Products</span>
                                <br />
                            </div>
                            <AccordionList />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>

    )
}

export default Dashboard;