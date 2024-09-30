import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store'; 
import { convertDate } from '@/utils/utils';
import { Pagination } from '@nextui-org/react';
import axios from '@/utils/axios';

const UserReservationsHistory = () => {
    const [reservations, setReservations] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await axios.get('/user/reservations?page=' + (currentPage - 1) + '&size=' + itemsPerPage);
            setTotalPages(response.data.totalPages);
            setReservations(response.data.reservations);
        }

        fetchReservations();

    }, [currentPage]);

    const handleChangePage = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    }

    return (
        <div className="flex flex-col py-8 px-4 mb-10 gap-4 h-[600px] w-[500px] lg:gap-5 rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
            <span className='text-3xl font-bold uppercase'>Istoric rezervari</span>

            <div className="flex flex-col w-full h-[400px] overflow-scroll">
                {reservations?.length === 0 && <span className='text-2xl'>Nu ai nicio rezervare</span>}
                {reservations?.map(payment => (
                        <div key={payment.date} className='grid grid-cols-2 gap-2 bg-lightGray mt-5 p-2 rounded'>
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

                <Pagination
                className="flex items-center justify-center"
                    isCompact
                    showControls 
                    total={totalPages} 
                    page={currentPage}
                    onChange={handleChangePage}
                />

        </div>
    )
}

export default UserReservationsHistory;