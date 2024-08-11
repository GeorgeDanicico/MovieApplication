'use client'

import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Input, Button } from '@nextui-org/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required('Acest camp este obligatoriu'),
    email: yup.string().email('Email-ul nu este valid').required('Acest camp este obligatoriu'),
    password: yup.string().required('Acest camp este obligatoriu'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Parolele nu coincid').required('Acest camp este obligatoriu')
}).required();

const SignupComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center w-full h-screen bg-signup bg-center bg-cover'>
            <div className="flex flex-col w-full lg:w-1/3 mx-8 lg:mx-0 px-8 py-16 gap-4 shadow-spreaded bg-white shadow-black rounded-lg">
                <span className='text-3xl text-primary font-bold'>Creare cont</span>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-2 text-black text-base font-bold'>
                    <Input type="text" id="name" label="Nume" size="lg" placeholder='Introdu numele complet' {...register('name')} 
                        className="my-1"/>
                    {errors.name && <span className="text-red-500 font-bold text-sm mt-0.5 pl-2">
                        {errors.name.message}</span>}

                    <Input type="text" id="email" label="Email" size="lg" placeholder='Introdu adresa ta de email' {...register('email')}
                        className="my-1"/>
                    {errors.email && <span className="text-red-500 font-bold text-sm mt-0.5 pl-2">{errors.email.message}</span>}

                    <Input type="password" id="password" label="Parola" size="lg" placeholder='Introdu o parola sigura' {...register('password')}
                        className='my-1'
                    />
                    {errors.password && <span className="text-red-500 font-bold text-sm mt-0.5 pl-2">{errors.password.message}</span>}

                    <Input type="password" id="confirmPassword" label="Confirma parola" size="lg" placeholder='Introdu din nou parola' {...register('confirmPassword')}
                        className='my-1'
                    />
                    {errors.confirmPassword && <span className="text-red-500 font-bold text-sm mt-0.5 pl-2">{errors.confirmPassword.message}</span>}

                    <Button type="submit" isLoading={false} radius="full"
                        className='text-lg font-medium bg-primary py-3 w-2/3 h-2/3 text-white self-center my-2 hover:cursor-pointer hover:bg-red-800 disabled:bg-gray-500'>
                        Creare cont
                    </Button>

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