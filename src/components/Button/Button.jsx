import React from 'react'
import './Button.style.scss'


const Button = ({children, isGoogleSignIn, ...props}) => {
  return (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...props}>
        {children}
    </button>
  )
}

export default Button