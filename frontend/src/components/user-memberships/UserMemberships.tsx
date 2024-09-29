import React, { useEffect, useState } from 'react'
import { UserMembershipCard } from './UserMembershipCard'
import axios from '@/utils/axios';

export const UserMemberships = () => {
    const [memberships, setMemberships] = useState<MembershipDetails[]>([]);

    const fetchMemberships = async () => {
        try {
            const response = await axios.get<MembershipDetails[]>('/user/memberships');
            console.log(response.data);
            setMemberships(response.data);
        } catch (err) {
        }
    }

    useEffect(() => {
        fetchMemberships();
        console.log(memberships);
    }, []);

    return (
        <div className="flex flex-col px-8 md:px-32 py-16 bg-white h-full w-full">
            <div className="flex flex-col text-center self-center gap-4">
                <h2 className='text-primary tracking-widest uppercase text-3xl font-semibold'>Preturile noastre</h2>
                <span className='text-black text-lg'>Avem mai multe optiuni de abonamente, menite sa satisfaca nevoile fiecarui client in mod individual.</span>
            </div>

            <div className="flex items-center justify-center w-full mt-10">
                {memberships.map(membership => (
                    <UserMembershipCard 
                        key={membership.id} 
                        id={membership.id}
                        name={membership.name}
                        description={membership.description}
                        sold={membership.sold}
                        price={membership.price}
                        entries={membership.entries}
                        duration={membership.duration}
                    />
                ))}

            </div>
        </div>
    )
}
