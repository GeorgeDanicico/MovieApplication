'use client';

import React, { useMemo } from 'react';
import { useStore } from '@/store/store';
import UserMainDetailsCard from '@/components/user-main-details/UserDashboardMainDetails';
import UserPinCard from '../user-pin-card/UserPinCard';
import UserCalendarCard from '../user-calendar/UserCalendarCard';
import UserActiveReservations from '../user-active-reservations/UserActiveReservation';
import UserActivePayments from '../user-payments/UserActivePayments';

const UserDashboardBody = () => {

    const { userDetails } = useStore();
    const hasUserActiveSubscription = useMemo(() => !!userDetails?.subscriptionDetails, [userDetails]);

    return (
        <div className='flex flex-wrap px-8 py-8 lg:px-32 lg:py-16 gap-16 w-full bg-white h-full'>

            <UserPinCard />
            <UserMainDetailsCard />
            {hasUserActiveSubscription && <UserCalendarCard />}
            <UserActiveReservations />
            <UserActivePayments />

        </div>
    )
}

export default UserDashboardBody