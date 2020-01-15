import React from 'react'
import './signin.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { auth ,signInWithGoogle } from '../../firebase/firebase.utils'
import Grid from '@material-ui/core/Grid'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const{email , password} = this.state
        
        try{
            await auth.signInWithEmailAndPassword(email , password)
            this.setState({ email: '', password: ''})

        }catch (error) {
            console.log(error)
        }
    };

    handleChange = e =>{
        const {name , value} = e.target;
        this.setState({ [name] : value })
    };

    render() {
        return (
            <Grid item xs={6} >
                <h2 className='title'> I already have a account </h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3}>
                        <FormInput
                            type='email'
                            name='email'
                            label='Email'
                            handleChange={this.handleChange}
                            value={this.state.email}
                            fullWidth
                            required
                        />

                        <FormInput
                            type='password'
                            name='password'
                            label='Password'
                            handleChange={this.handleChange}
                            value={this.state.password}
                            fullWidth
                            required
                        />

                        <CustomButton type='submit' value='submit' xs={6} >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn xs={6}>
                            {' '}Sign In with Google{' '}
                        </CustomButton>
                    </Grid>
                </form>
            </Grid>
        )
    }

}

export default SignIn