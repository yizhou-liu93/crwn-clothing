import React from 'react'

import { CustomButtonContainer } from './custom-button.styles'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer className='custom-button' {...props}>{children}</CustomButtonContainer>
);

/*   const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}
    custom-button`}
      {...otherProps}>
      {children}
    </button>
  )
} */

export default CustomButton
