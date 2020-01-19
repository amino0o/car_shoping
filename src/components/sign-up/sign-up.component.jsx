import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'
import Grid from "@material-ui/core/Grid";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {displayName ,email ,password ,confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert("password don't match");
            return false;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email , password)

            await createUserProfileDocument(user , {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch (e) {
            console.error(e)
        }
    }

    handleChange = event => {
        const { name , value} = event.target

        this.setState({
            [name] : value
        })
    }

    render() {
        const {displayName , email , password,confirmPassword} = this.state;
        return (
            <Grid item md={6} xs={12} >
                <h2 className='title'> I do not have a account </h2>
                <p>Sign up with your email and password</p>

                <form className='' onSubmit={this.handleSubmit}>
                    <Grid container={true} spacing={3}>
                        <FormInput
                            type='text'
                            name='displayName'
                            label='Display Name'
                            onChange={this.handleChange}
                            value={displayName}
                            fullWidth
                            xs
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            label='email'
                            onChange={this.handleChange}
                            value={email}
                            fullWidth
                            xs
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            onChange={this.handleChange}
                            value={password}
                            label='password'
                            fullWidth
                            xs
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            onChange={this.handleChange}
                            value={confirmPassword}
                            label='confirm Password'
                            fullWidth
                            xs
                            required
                        />
                        <CustomButton type='submit' xs={6}>Sign Up</CustomButton>
                    </Grid>
                </form>
            </Grid>
        )
    }
}

export default SignIn