'use client';

import React, { useMemo } from 'react';
import { useStore } from '@/store/store';
import UserMainDetailsCard from '@/components/user-main-details/UserDashboardMainDetails';
import UserPaymentDetails from '@/components/user-payment-details/UserPaymentDetails';
import UserDashboardCalendar from '@/components/user-calendar/UserDashboardCalendar';
import UserPinCard from '../user-pin-card/UserPinCard';

const UserDashboardBody = () => {

    const { userDetails } = useStore();
    const hasUserActiveSubscription = useMemo(() => !!userDetails?.subscriptionDetails, [userDetails]);

    return (
        <div className='flex flex-row px-8 py-8 lg:px-32 lg:py-16 gap-16 w-full'>

            <UserPinCard />
            <UserMainDetailsCard />
            {hasUserActiveSubscription && <UserDashboardCalendar />}
            <UserPaymentDetails />
        </div>
    )
}

export default UserDashboardBody