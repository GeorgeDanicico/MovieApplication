'use client';

import React, { useEffect } from 'react';
import UserDashboardBody from '@/components/user-dashboard/UserDashboardBody';
import { useStore } from '@/store/store';
import axios from '@/utils/axios';
import CustomNavbar from '@/components/navbar/CustomNavbar';

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
        <div className="h-screen">
            <CustomNavbar />
            <UserDashboardBody />
        </div>
    )
}

export default UserDashboardPage