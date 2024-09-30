import React from 'react'
import ClassReservationItem from './ClassReservationItem'
import { convertDate } from '@/utils/utils'

const UserReservationsWidget = ({ selectedDate, sessions}: { selectedDate: string, sessions: SessionDetails[] }) => {
    return (
        <div className="flex flex-col gap-4 w-[600px] ml-10">
            <span className='text-3xl font-semibold self-start'>Clase disponibile {convertDate(selectedDate, false)}</span>

            {sessions.length === 0 && <span className='text-2xl'>Nu sunt clase disponibile pentru aceasta zi</span>}
            {sessions.map(session => (
                <ClassReservationItem
                    key={session.sessionId}
                    sessionId={session.sessionId}
                    className={session.sessionName}
                    coach={session.coachName}
                    time={session.date}
                    availableSpace={session.availableSpots}
                />
            ))}
        </div>
    )
}

export default UserReservationsWidget