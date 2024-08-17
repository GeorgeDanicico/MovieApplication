'use client'

import React from 'react'
import SignupForm from '@/components/auth/SignupForm';

const SignupComponent = () => {

    return (
        <div className='flex justify-center items-center w-full h-screen bg-signup bg-center bg-cover'>
            <SignupForm />
        </div>
    )
}

export default SignupComponent;