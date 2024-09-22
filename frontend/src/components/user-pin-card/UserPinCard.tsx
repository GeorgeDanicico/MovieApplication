import { useStore } from '@/store/store';
import React from 'react'

const UserPinCard = () => {
    const { userDetails } = useStore();

  return (
    <div className="flex flex-col py-8 gap-2 w-full lg:w-1/2 rounded-lg bg-white h-[200px] text-center text-primary shadow-spreaded shadow-primary">
        <span className='text-6xl font-bold'>{userDetails?.user?.pin}</span>
        <span className='text-3xl'>Codul tau PIN</span>
        <span>Prezinta acest cod la intrarea in sala de sport</span>
    </div>
  )
}

export default UserPinCard