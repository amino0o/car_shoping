import React from 'react'
// import './form-input.style.scss'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

const FormInput = ({handleChange ,xs , label , ...otherProps}) => (

    <Grid container item xs={
        xs ? xs : '12'
    }>
        <TextField
            label={label}
            onChange={handleChange}
            variant="standard"
            {...otherProps}
         />
    </Grid>

);

export default FormInput