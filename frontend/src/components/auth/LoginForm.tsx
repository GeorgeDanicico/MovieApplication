'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';import { useForm } from 'react-hook-form';
import axios from '@/utils/axios';
import toast from 'react-hot-toast';
import LoadingScreen from '@/utils/LoadingScreen';
import { useStore } from '../../store/store';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Link } from '@nextui-org/react';

const schema = yup.object({
    email: yup.string().email().required('Acest camp este obligatoriu'),
    password: yup.string().required('Acest camp este obligatoriu')
}).required();

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const { accessToken, setAccessToken } = useStore();
    const router = useRouter();

    useEffect(() => {
        if (accessToken) {
            router.push('/home');
        }
    }, []);

    const onSubmit = async (data: LoginRequest) => {
        try {
            setIsLoading(true);
            const response = await axios.post<LoginResponse>('/login', data);
            const accessToken = response.data.accessToken;
            const role = response.data.role;
            setAccessToken(accessToken);

            toast.success('Te-ai logat cu succes');
            setIsLoading(false);

            if (role === 'ADMIN') {
                router.push('/admin');
            } else {
                router.push('/home');
            }
        } catch (err: any) {
            toast.error(err?.response?.data || 'A aparut o eroare neasteptata. Incearca mai tarziu');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center px-8 lg:px-16 text-center w-[90%] h-2/3 rounded lg:rounded-none lg:rounded-r-lg gap-4 text-2xl font-bold shadow-spreaded shadow-black">
            <div className="flex flex-col gap-4 w-full text-black">
                <span className='text-3xl'>Conectare</span>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full lg:w-2/3 text-left self-center'>
                    <Input type="text" id="email" size="lg" label="Email" placeholder='exemplu@gmail.com' {...register('email')} />
                    {errors.email && <span className="text-red-700 text-xs mt-1">{errors.email.message}</span>}

                    <Input type="password" size="lg" id="password" label="Password" placeholder='************' {...register('password')}
                    />
                    {errors.password && <span className="text-red-700 text-xs mt-1">{errors.password.message}</span>}

                    <Button type="submit" isLoading={isLoading} radius="full"
                        className='text-lg font-bold bg-primary py-3 w-2/3 h-2/3 text-white self-center my-2 hover:cursor-pointer hover:bg-red-800'
                    >
                        Login
                    </Button>
                </form>

                <div className="flex flex-row gap-4 self-end items-center">
                    <span className='text-base text-primary font-light'>Nu ai un cont?</span>
                    <Button 
                        as={Link}
                        href='/signup'
                        radius="full"
                        className='bg-primary px-8 text-base py-2 text-center text-white font-bold'>
                            Inregistreaza-te
                    </Button>
                </div>

                <div className="w-full h-[0.5px] bg-slate-600"></div>
            </div>
            {isLoading && <LoadingScreen />}
        </div>
    )
}

export default LoginForm;