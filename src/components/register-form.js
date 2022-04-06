import { Button, Grid, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { Component, useEffect } from 'react'

const pinMap = {
    "HSR Layout": 560102,
    "Marathahalli Colony": 560037,
    "Lalbagh West": 560004
}

export default class RegisterForm extends Component {

    handleAddress = (e) => {
        console.log(e, "hey");
    }
    render() {
        return (
            <Formik initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                pinCode: ''
            }}
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
                    if (!values.firstName) {
                        errors.firstName = 'Required';
                    } else if (
                        values.firstName.length < 3
                    ) {
                        errors.firstName = 'First Name length should be greater than 3';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Required';
                    } else if (
                        values.lastName.length < 3
                    ) {
                        errors.lastName = 'Last Name length should be greater than 3';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert("Registered Successfully!");
                        setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting, values, setFieldValue }) => {
                    useEffect(() => {
                        let val = Object.keys(pinMap).filter(el => el.match(new RegExp(values.address, 'ig')))
                        if (val.length > 0 && values.address !== '') setFieldValue('pinCode', pinMap[val[0]])
                        else setFieldValue('pinCode', '')
                    }, [values.address])

                    return (
                        <Form style={{ flex: 6, display: 'flex' }}>
                            <Grid container sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                <Grid item>
                                    <Typography component={'h2'} variant={'h3'}>Create An Account</Typography>
                                </Grid>
                                <Grid item>
                                    <Field type="email" name="email" label="Email" component={NewTextField} />
                                    <ErrorMessage name="email" component={NewErrorField} />
                                </Grid>
                                <Grid item container>
                                    <Grid item xs={6}>
                                        <Field type="text" name="firstName" label="First Name" component={NewTextField} />
                                        <ErrorMessage name="firstName" component={NewErrorField} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field type="text" name="lastName" label="Last Name" component={NewTextField} />
                                        <ErrorMessage name="lastName" component={NewErrorField} />
                                    </Grid>
                                </Grid>
                                <Grid item container>
                                    <Grid item xs={6}>
                                        <Field type="text" name="address" label="Address" component={NewTextField} />
                                        <ErrorMessage name="address" component={NewErrorField} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field type="text" name="pinCode" label="Pin" component={NewTextField} />
                                        <ErrorMessage name="pinCode" component={NewErrorField} />
                                    </Grid>
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
                    )
                }}
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