import { Grid } from '@mui/material'
import React, { Component } from 'react'
import LoginForm from './login-form'

export default class LoginComponent extends Component {
    render() {
        return (
            <Grid container sx={{ height: "100vh" }}>
                <Grid item xs={12} lg={4} sx={{ flex: 1 }}>
                    <LoginForm />
                </Grid>
                <Grid item lg={8} sx={{ background: "#697BFF", flex: 1 }} display={{ xs: "none", lg: "block" }}>
                    YY
                </Grid>
            </Grid>
        )
    }
}
