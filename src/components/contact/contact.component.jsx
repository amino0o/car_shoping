import React from "react";

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Grid from "@material-ui/core/Grid";

class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            name: '',
            description : '',
            email: ''
        }
    }

    handleChange = event =>{
        const {name , value} = event.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div>
                <h1>Contact Us</h1>
                <Grid container spacing={3} >
                    <FormInput
                        label='Name'
                        handleChange={this.handleChange}
                        value={this.state.name}
                        name='name'
                        xs='6'
                        fullWidth
                        required
                    />
                    <FormInput
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        xs='6'
                        fullWidth

                        required
                    />

                    <FormInput
                        label='description'
                        handleChange={this.handleChange}
                        value={this.state.description}
                        name='description'
                        margin='dense'
                        rowMax='10'
                        rows="7"
                        fullWidth
                        multiline
                        required
                    />
                    <CustomButton type='submit' value='submit'>Submit</CustomButton>
                </Grid>

            </div>
        )
    }
}

export default Contact