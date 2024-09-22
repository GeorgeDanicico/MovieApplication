'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/store';
import { Card, CardHeader } from '@nextui-org/react';

const UserMainDetailsCard = () => {
    const { userDetails } = useStore();
    const router = useRouter();
    const hasSubscription = userDetails?.subscriptionDetails !== null;

    const handleBuySubscription = () => {
        router.push('/membership');
    }

    return (
        hasSubscription ? (
        <Card className="flex max-w-[700px] flex-col py-8 px-4 lg:gap-16 rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
            <CardHeader>
                <span className='text-3xl font-bold uppercase'>Detalii <span className='text-slate-500'>Abonament</span></span>
            </CardHeader>

            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center w-full">
                <div className="flex flex-col gap-2 text-center w-full">
                    <span className='text-6xl font-bold'>{userDetails?.subscriptionDetails?.reservationsTomorrow}</span>
                    <span className='text-2xl'>Rezervari Maine</span>
                </div>
                <div className="flex flex-col gap-2 text-center w-full">
                    <span className='text-6xl font-bold'>{userDetails?.subscriptionDetails?.weekReservations}</span>
                    <span className='text-2xl'>Rezervari Saptamana Aceasta</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center items-center w-full">
                <div className="flex flex-col gap-2 text-center w-full">
                    <span className='text-6xl font-bold'>{userDetails?.subscriptionDetails?.reservationsLeft}</span>
                    <span className='text-2xl'>Programari Ramase Din Abonament</span>
                </div>
                <div className="flex flex-col  gap-2 text-center w-full">
                    <span className='text-6xl font-bold'>{userDetails?.subscriptionDetails?.daysLeft}</span>
                    <span className='text-2xl'>Zile Ramase Din Abonament</span>
                </div>
            </div>
        </Card>
        ) : (
            <Card className="flex flex-col py-8 px-4 gap-4 lg:gap-16 w-full h-[250px] rounded-lg bg-white items-center text-center text-primary shadow-spreaded shadow-primary">
                <span className='text-3xl font-bold uppercase'>Nu ai nici un abonament activ. <span className='text-slate-500'></span></span>
                <button className='px-4 py-2 w-fit bg-primary text-white font-bold text-xl' onClick={() => handleBuySubscription()}>Cumpara unul</button>
            </Card>
        )
    )
}

export default UserMainDetailsCard