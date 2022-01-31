import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



import './sign-in.styles.scss';

const SignIn = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userData;
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserData({email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
       
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserData({...userData, [name]: value })
    }

    
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
    
}

export default SignIn;