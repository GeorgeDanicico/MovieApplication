import React, { useEffect, useState } from 'react';
import {Calendar} from "@nextui-org/react";
import UserReservationsWidget from './UserReservationsWidget';
import { compareDates, getTodayDate } from '@/utils/utils';
import axios from '@/utils/axios';
import { DateValue, getLocalTimeZone, today } from '@internationalized/date';


const UserCalendarCard = () => {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = useState<DateValue>(defaultDate);
  const [sessions, setSessions] = useState<SessionDetails[]>([]);

  const fetchSessions = async (date: DateValue) => {
    try {
        const response = await axios.get<SessionDetails[]>(`/user/sessions/${date.toString()}`);

        setSessions(response.data);
    } catch (err) {
    }
}

  const changeFocusedDate = (date: DateValue) => {
    setFocusedDate(date);
    fetchSessions(date);
  }

  return (
    <div className="flex flex-col py-8 px-4 gap-4 lg:gap-16 w-[900px] rounded-lg bg-white text-center text-primary shadow-spreaded shadow-primary">
      <span className='text-3xl font-bold uppercase'>Rezerva <span className='text-slate-500'>Clasa</span></span>
      <span className='self-start'>Selecteaza o zi din calendar pentru a vedea ce clase sunt disponibile pentru ziua respectiva.</span>
      <div className="flex flex-row">
        <Calendar 
          aria-label="Date (No Selection)"
          value={focusedDate}
          onChange={changeFocusedDate}
        />
        <UserReservationsWidget
            selectedDate={focusedDate.toString()}
            sessions={sessions}
        />
      </div>

    </div>
  )
}

export default UserCalendarCard