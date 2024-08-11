'use client'

import React, { useState } from 'react'
import axios from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/store';
import toast from 'react-hot-toast';
import ConfirmationModal from '@/utils/ConfirmationModal';
import { convertDate, getTimeFromDate } from '@/utils/utils';

const ClassReservationItem = ({ sessionId, className, coach, time, availableSpace }: { sessionId: string, className: string, coach: string, time: string, availableSpace: number }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addReservation } = useStore();
    const router = useRouter();

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const handleOpen = () => {
        setIsModalOpen(true);
    }

    const handleReservation = async () => {
        try {
            const response = await axios.post<ActiveReservation>(`/user/reserveSession/${sessionId}`, {});
            addReservation(response.data);
            toast.success('Rezervarea a fost facuta cu succes');
            handleClose();
        } catch (err: any) {
            toast.error(err?.response?.data);
        }
    }

    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 p-4 md:px-8 md:py-4 w-full border-2 border-primary justify-between items-center'>
            <div className="flex flex-col sm:flex-row gap-4 text-2xl font-bold">
                <span>{className}</span>
                <span>{coach}</span>
                <span>{getTimeFromDate(time)}</span>
                <span>{availableSpace} locuri ramase</span>
            </div>

            <button 
                className='px-4 py-2 w-fit bg-primary text-white font-bold text-xl'
                onClick={() => handleOpen()}>Rezerva loc
            </button>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleClose}
                onConfirm={handleReservation}
            />
        </div>
    )
}

export default ClassReservationItem