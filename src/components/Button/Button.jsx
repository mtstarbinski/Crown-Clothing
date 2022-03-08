import React from 'react'
import './Button.style.scss'


const Button = ({children, ...props}) => {
  return (
    <button className='custom-button' {...props}>
        {children}
    </button>
  )
}

export default Button