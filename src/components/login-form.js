import { Button, Grid, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        console.log(this);
        return (
            <Formik initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (
                        values.password.length < 6
                    ) {
                        errors.password = 'Password length should be greater than 6';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        this.props.setUser(values)
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting }) => (
                    <Form style={{ flex: 6, display: 'flex' }}>
                        <Grid container sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            <Grid item>
                                <Typography component={'h2'} variant={'h3'}>Login</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Sign in with your data that you entered during your registration.</Typography>
                            </Grid>
                            <Grid item>
                                <Field type="email" name="email" label="Email" component={NewTextField} />
                                <ErrorMessage name="email" component={NewErrorField} />
                            </Grid>
                            <Grid item>
                                <Field type="password" name="password" label="Password" component={NewTextField} />
                                <ErrorMessage name="password" component={NewErrorField} />
                            </Grid>
                            <Grid item>
                                <Button type="submit" disabled={isSubmitting} variant="contained" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        )
    }
}
const NewTextField = ({ field, ...props }) => {
    return <TextField fullWidth variant='outlined' {...props} {...field} />
}
const NewErrorField = ({ children }) => {
    return <span style={{ color: 'red' }}>{children}</span>
}