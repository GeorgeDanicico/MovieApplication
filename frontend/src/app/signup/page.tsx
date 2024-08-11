'use client'

import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const SignupComponent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch('password')
    const onSubmit = async (data: any) => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center w-full h-screen bg-signup bg-center bg-cover'>
            <div className="flex flex-col w-full lg:w-1/3 mx-8 lg:mx-0 px-8 py-16 gap-4 shadow-spreaded bg-white shadow-black rounded-lg">
                <span className='text-3xl text-primary font-bold'>Creare cont</span>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-2 text-black text-base font-bold'>
                    <label htmlFor="name">Nume</label>
                    <input type="text" id="name" placeholder='Introdu numele complet' {...register('name', { required: true })}
                        className='border border-primary rounded-md p-3 text-primary placeholder-red-300 text-sm font-light focus:outline-primary'
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">Acest camp este obligatoriu</span>}

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder='Introdu adresa ta de email' {...register('email', { required: true , pattern: /^\S+@\S+$/i})}
                        className='border border-primary rounded-md p-3 text-primary placeholder-red-300 text-sm font-light focus:outline-primary'
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">Acest camp este obligatoriu</span>}

                    <label htmlFor="password">Parola</label>
                    <input type="password" id="password" placeholder='Introdu o parola sigura' {...register('password', { required: true })}
                        className='border border-primary rounded-md p-3 text-primary placeholder-red-300 text-sm font-light focus:outline-primary'
                    />
                    {errors.password && <span className="text-red-500 text-xs mt-1">Acest camp este obligatoriu</span>}

                    <label htmlFor="confirmPassword">Confirma Parola</label>
                    <input type="password" id="confirmPassword" placeholder='Introdu din nou parola' {...register('confirmPassword', { required: true })}
                        className='border border-primary rounded-md p-3 text-primary placeholder-red-300 text-sm font-light focus:outline-primary'
                    />
                    {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">Acest camp este obligatoriu</span>}

                    <input type="submit" value="Creeaza cont" 
                        className='text-lg font-bold bg-primary py-3 w-2/3 text-white self-center rounded my-2 hover:cursor-pointer hover:bg-red-800 disabled:bg-gray-500' />

                </form>

                <div className="flex flex-row gap-1 text-primary text-base font-light">
                    <span>Ai deja un cont?</span>
                    <Link href='/login' className='italic underline font-bold'>Conecteaza-te</Link>
                </div>

            </div>
        </div>
    )
}

export default SignupComponent;