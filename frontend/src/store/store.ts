import { access } from "fs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StateType {
    accessToken: string | null,
    userDetails: UserDetails | null,
    setAccessToken: (accessToken: string | null) => void,
    setUserDetails: (userDetails: UserDetails | null) => void,
    addReservation: (reservation: ActiveReservation) => void,
    removeReservation: (reservationId: number) => void,
    logout: () => void

}

export function clearStore() {
    localStorage.removeItem('user-storage');
}

export const useStore = create(
    persist<StateType>(
        (set) => ({
            accessToken: '',
            setAccessToken: (accessToken: string | null) => set({ accessToken }),
            userDetails: null,
            setUserDetails: (userDetails: UserDetails | null) => set({ userDetails }),
            addReservation: (reservation: ActiveReservation) => {
                const userDetails = getState().userDetails;
                if (userDetails !== null) {
                    set({ userDetails: { ...userDetails, activeReservations: [...userDetails.activeReservations, reservation] } });
                }
            },
            removeReservation: (reservationId: number) => {
                const userDetails = getState().userDetails;
                if (userDetails !== null) {
                    set({ userDetails: { ...userDetails, activeReservations: userDetails.activeReservations.filter(reservation => reservation.reservationId !== reservationId) } });
                }
            },
            logout: () => { localStorage.removeItem('user-storage'); set({ accessToken: null, userDetails: null }) }
        }), {
        name: 'user-storage'
}));

export const getState = useStore.getState;