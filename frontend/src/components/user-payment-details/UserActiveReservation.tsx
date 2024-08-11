'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/store';
import axios from '@/utils/axios';
import { convertDate } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ConfirmationModal from '@/utils/ConfirmationModal';

const UserActiveReservations = () => {
    const { userDetails, removeReservation } = useStore();
    const [selectedReservationId, setSelectedReservationId] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const router = useRouter();

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
        <div className="flex flex-col w-full">
            {userDetails?.activeReservations?.length === 0 && <span className='text-2xl'>Nu ai nicio rezervare activa</span>}
            {userDetails?.activeReservations?.map((reservation: any) => (
                <div key={reservation.reservationId} className='grid grid-cols-2 gap-2 border-2 p-2 border-primary'>
                    <span>{convertDate(reservation.date, true)}</span>
                    <span>{reservation.sessionName}</span>
                    <span>{reservation.coachName}</span>
                    <span className='font-bold text-lg'>REZERVAT</span>
                    <button className='col-span-2 text-white bg-primary font-semibold text-lg'
                        onClick={() => openConfirmationModal(reservation.reservationId)}>Renunta</button>
                </div>
            ))}
            <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={() => handleCancelReservation()}/>
        </div>
    )
}

export default UserActiveReservations