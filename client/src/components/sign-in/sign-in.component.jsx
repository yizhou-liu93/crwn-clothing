import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
// import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentails] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    /*     try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({
            email: '',
            password: ''
          });
        } catch (error) {
          console.error(error);
        } */

  }

  const handleChange = (event) => {
    setCredentails({ ...userCredentials, [event.target.name]: event.target.value })
  }

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={handleChange}
            required />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={handleChange}
            required />
          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
