import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({children , isGoogleSignIn , ...otherProps }) => (
    <button className={ `${ isGoogleSignIn ? 'googleSingIn' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton