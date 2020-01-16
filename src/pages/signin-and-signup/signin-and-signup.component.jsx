import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './signin-and-signup.style.scss'
import Grid from '@material-ui/core/Grid'

const signInAndSignUp = () => (
    <Grid container spacing={5}>
        <SignIn />
        <SignUp />
    </Grid>
);

export default signInAndSignUp