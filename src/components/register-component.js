import { Box, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './register-form'
import ReviewComponent from './review-component'

export default class RegisterComponent extends Component {
    render() {
        return (
            <Grid container sx={{ height: "100vh" }}>
                <Grid item lg={8} sx={{ background: "#697BFF", flex: 1 }} display={{ xs: "none", lg: "block" }}>
                    <ReviewComponent />
                </Grid>
                <Grid item xs={12} lg={4} sx={{ display: 'flex', flex: 1, padding: '5%' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'space-between', flexDirection: 'column' }}>
                        <Box flex={2}>
                            <Typography variant='h5' fontWeight={900}>Food</Typography>
                            <Typography variant='h5' component={"h5"} fontWeight={900} color={"#4E60FF"}>Delivery</Typography>
                        </Box>
                        <RegisterForm />
                        <Box flex={1} width="100%">
                            <Typography textAlign={'center'}> Already have an account? <Link to="/login"> Log in</Link></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
