'use client';

import React from 'react';
import CustomNavbar from '@/components/navbar/CustomNavbar';
import { UserMemberships } from '@/components/user-memberships/UserMemberships';

const UserMembershipsPage = () => {

    return (
        <div className="h-screen">
            <CustomNavbar />
            <UserMemberships />
        </div>
    )
}

export default UserMembershipsPage