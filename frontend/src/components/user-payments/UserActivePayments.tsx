import React from 'react';
import { useStore } from '@/store/store'; 
import { convertDate } from '@/utils/utils';

const UserActivePayments = () => {
    const { userDetails } = useStore();

    return (
        <div className="flex flex-col py-8 px-4 gap-4 h-[600px] overflow-scroll mb-10 lg:gap-16 rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
            <span className='text-3xl font-bold uppercase'>Plati si facturare</span>

            <div className="flex flex-col w-full">
                {userDetails?.purchasesDetails?.length === 0 && <span className='text-2xl'>Nu ai nicio plata activa</span>}
                {userDetails?.purchasesDetails?.map(payment => (
                        <div key={payment.date} className='grid grid-cols-2 gap-2 border-2 p-2 border-primary'>
                        <a href={payment.paymentLink} target='_blank' className="flex flex-row gap-2 justify-center underline font-semibold">
                            <span>{convertDate(payment.date)}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                        </a>
            
                        <span>{payment.membershipPrice} lei</span>
                        <span>{payment.membershipName}</span>
                        <span className='font-bold text-lg text-green-500'>PLATIT</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserActivePayments