import React, {useEffect, useState} from 'react';
import axios from "@/utils/axios";
import UserReservationsWidget from './UserReservationsWidget';
import { compareDates, getTodayDate } from '@/utils/utils';

const UserDashboardCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(getTodayDate());
    const [sessions, setSessions] = useState<any[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await axios.get('/user/sessions');

                setSessions(response.data);
            } catch (err) {
            }
        }

        fetchSessions();
    }, [])

    return (
        <div className="flex flex-col py-8 px-4 gap-4 lg:gap-16 w-full rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
            <span className='text-3xl font-bold uppercase'>Rezerva <span className='text-slate-500'>Clasa</span></span>
            <span className='self-start'>Selecteaza o zi din calendar pentru a vedea ce clase sunt disponibile pentru ziua respectiva.</span>
            <UserReservationsWidget
                selectedDate={selectedDate}
                sessions={sessions.filter(session => compareDates(session.date, selectedDate))}
            />

        </div>
    )
}

export default UserDashboardCalendar;