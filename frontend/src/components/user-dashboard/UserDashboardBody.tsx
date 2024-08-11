'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/store';
import UserDashboardMainDetails from '@/components/user-main-details/UserDashboardMainDetails';
import UserPaymentDetails from '@/components/user-payment-details/UserPaymentDetails';
import UserDashboardCalendar from '@/components/user-calendar/UserDashboardCalendar';

const UserDashboardBody = () => {

    const { userDetails, setAccessToken, setUserDetails, logout } = useStore();
    const hasUserActiveSubscription = useMemo(() => !!userDetails?.subscriptionDetails, [userDetails]);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    }


    return (
        <div className='flex flex-col px-8 py-8 lg:px-32 lg:py-16 gap-16 justify-center items-center'>

            <div className="flex flex-col py-8 gap-2 w-full lg:w-1/2 rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
                <span className='text-6xl font-bold'>{userDetails?.user?.pin}</span>
                <span className='text-3xl'>Codul tau PIN</span>
                <span>Prezinta acest cod la intrarea in sala de sport</span>
            </div>

            <UserDashboardMainDetails />
            {hasUserActiveSubscription && <UserDashboardCalendar />}
            <UserPaymentDetails />

            <button onClick={handleLogout} className='w-full md:w-1/2 xl:w-1/3 bg-primary text-white text-lg font-semibold px-4 py-2'>Iesi din cont</button>
        </div>
    )
}

export default UserDashboardBody