'use client'

import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';
 
const LoginComponent = () => {

    return (
        <div className="relative flex flex-row w-full h-screen bg-linear-gradient items-center">
                <LoginForm />
        </div>
    )
}

export default LoginComponent;