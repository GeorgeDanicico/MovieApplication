'use client'

import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';
 
const LoginComponent = () => {

    return (
        <div className="relative flex flex-row w-full h-screen">
            <div className="hidden lg:flex flex-col justify-center items-end w-1/3 h-full bg-primary pointer-events-none select-none">
                <div className="flex flex-col justify-center items-center px-16 text-center w-[70%] h-2/3 rounded-l-lg gap-4 text-2xl font-bold shadow-spreaded shadow-black">
                    <Image src={'/logo-dreptunghi.jpeg'} alt="Logo" width={200} height={100} />
                    <span>Clubul sportiv preferat de satmareni</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-2/3 h-full bg-white">
                <Image src={'/logo-dreptunghi.jpeg'} alt="Logo" className='visible lg:invisible absolute top-8 w-56 h-24 ' width={200} height={100}/>

                <LoginForm />
            </div>
        </div>
    )
}

export default LoginComponent;