import React from 'react'

const UserDashboardHeader = ({ name, subscriptionType }: { name: string; subscriptionType: string }) => {
    return (
        <div className="relative flex justify-center w-full bg-white py-32 select-none pointer-events-none">

            <div className="flex flex-col text-start mr-0 xl:mr-48">
                <span className='text-black text-4xl font-semibold tracking-widest'>{name}</span>
                <span className='text-2xl text-primary'>Abonamentul <span className="uppercase font-bold">{subscriptionType}</span></span>
            </div>

            <img src='user-header-business-name-image.png' className='absolute top-0 left-10 w-32 h-32' alt=''/>
            <img src='user-header-corner-image.png' className='absolute bottom-0 left-0 w-full md:w-[50%] h-[75%]' alt=''/>
            <img src='user-header-decoration-element-image.png' className='absolute bottom-10 invisible md:visible md:right-32 right-64 w-48 h-48' alt=''/>
        </div>
    )
}

export default UserDashboardHeader