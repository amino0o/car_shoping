import React from 'react'

import './custom-button.style.scss'
import Grid from "@material-ui/core/Grid";

const CustomButton = ({children , isGoogleSignIn ,xs , ...otherProps }) => (
    <Grid container={true} item xs>
        <button className={ `${ isGoogleSignIn ? 'googleSingIn' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    </Grid>
)

export default CustomButton