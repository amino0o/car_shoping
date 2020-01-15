import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './signin-and-signup.style.scss'
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'

const signInAndSignUp = () => (

    <Container container maxWidth='md' >
        <Grid container spacing={5}>
            <SignIn />
            <SignUp />
        </Grid>

    </Container>
);

export default signInAndSignUp