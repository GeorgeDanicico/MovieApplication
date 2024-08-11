'use client';

import React, { useEffect } from 'react';
import UserDashboardHeader from '@/components/user-dashboard/UserDashboardHeader';
import UserDashboardBody from '@/components/user-dashboard/UserDashboardBody';
import { useStore } from '@/store/store';
import axios from '@/utils/axios';

const UserDashboardPage = () => {
    const { accessToken, setUserDetails } = useStore();

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (accessToken) {
                const response = await axios.get('/user/details', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
    
                setUserDetails(response.data);
            }
        }
    
        fetchUserDetails();
    }, [accessToken, setUserDetails])

    return (
        <div className="flex flex-col">
            <UserDashboardHeader name='test' subscriptionType={'Gold'} />
            <UserDashboardBody />
        </div>
    )
}

export default UserDashboardPage