import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault()
         //redux sagas handler    
        dispatch(emailSignInStart({email, password}));
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value })
    };

    
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email}
                    handleChange={handleChange} 
                    label='email'
                    required 
                />                    
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password}
                    handleChange={handleChange}
                    label='password' 
                    required 
                />                 
                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
    
}

export default SignIn;