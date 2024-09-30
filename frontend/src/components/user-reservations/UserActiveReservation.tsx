'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/store';
import axios from '@/utils/axios';
import { convertDate } from '@/utils/utils';
import toast from 'react-hot-toast';
import ConfirmationModal from '@/utils/ConfirmationModal';
import { Button } from '@nextui-org/react';

const UserActiveReservations = () => {
    const { userDetails, removeReservation } = useStore();
    const [selectedReservationId, setSelectedReservationId] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCancelReservation = async () => {
        try {
            await axios.delete(`/user/cancelReservation/${selectedReservationId}`, {});
            removeReservation(selectedReservationId);
            toast.success('Rezervarea a fost anulata cu succes');
        } catch (err: any) {
            toast.error(err.response.data.message);
        }

        setIsModalOpen(false);
        setSelectedReservationId(0);
    }

    const openConfirmationModal = (reservationId: any) => {
        setSelectedReservationId(reservationId);
        setIsModalOpen(true);
    }

    const closeConfirmationModal = () => {
        setSelectedReservationId(0);
        setIsModalOpen(false);
    }

    return (
        <div className="flex flex-col py-8 px-4 gap-4 lg:gap-16 h-max-[600px] w-[500px] mb-10 rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
            <span className='text-3xl font-bold uppercase'>Rezervarile <span className='text-slate-500'>active</span></span>

            <div className="flex flex-col h-max-[400px] w-full overflow-scroll">
                {userDetails?.activeReservations?.length === 0 && <span className='text-2xl'>Nu ai nicio rezervare activa</span>}
                {userDetails?.activeReservations?.map((reservation: any) => (
                    <div key={reservation.reservationId} className='grid grid-cols-2 gap-2 bg-lightGray p-2 rounded'>
                        <span>{convertDate(reservation.date, true)}</span>
                        <span>{reservation.sessionName}</span>
                        <span>{reservation.coachName}</span>
                        <span className='font-bold text-lg'>REZERVAT</span>
                        <Button className='col-span-2 text-white bg-primary font-semibold text-lg'
                            onClick={() => openConfirmationModal(reservation.reservationId)}>Renunta</Button>
                    </div>
                ))}
                <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={() => handleCancelReservation()}/>
            </div>
        </div>
    )
}

export default UserActiveReservations