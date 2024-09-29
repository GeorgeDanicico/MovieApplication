'use client'

import React, { useState } from 'react'
import axios from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/store';
import toast from 'react-hot-toast';
import ConfirmationModal from '@/utils/ConfirmationModal';
import { convertDate, getTimeFromDate } from '@/utils/utils';
import { Button } from '@nextui-org/react';

const ClassReservationItem = ({ sessionId, className, coach, time, availableSpace }: { sessionId: number, className: string, coach: string, time: string, availableSpace: number }) => {
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
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 p-4 w-[500px] bg-lightGray rounded justify-between items-center'>
            <div className="flex flex-col sm:flex-row gap-4 text-xl font-bold">
                <span>{className}</span>
                <span>Antrenor: {coach}</span>
                <span>Ora: {getTimeFromDate(time)}</span>
                <span>Locuri ramase: {availableSpace}</span>
            </div>

            <Button 
                className='px-4 py-2 p-6 w-fit bg-primary text-white font-bold text-xl'
                onClick={() => handleOpen()}>Rezerva loc
            </Button>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleClose}
                onConfirm={handleReservation}
            />
        </div>
    )
}

export default ClassReservationItem