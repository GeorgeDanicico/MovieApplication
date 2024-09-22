'use client'

import React from 'react'
import SignupForm from '@/components/auth/SignupForm';

const SignupComponent = () => {

    return (
        <div className='flex justify-center items-center w-full h-screen bg-center bg-linear-gradient'>
            <SignupForm />
        </div>
    )
}

export default SignupComponent;