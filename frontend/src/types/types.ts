interface UserInfo {
    name: string,
    email: string,
    createdAt: string,
    pin: number,
    lastSubscription: any
}

interface MembershipDetails {
    id: number,
    name: string,
    description: string,
    sold: boolean,
    price: number,
    entries: number,
    duration: number
}

interface SessionDetails {
    availableSpots: number,
    coachName: string,
    date: string,
    sessionId: number,
    sessionName: string
}

interface PurchaseDetails {
    date: string,
    membershipName: string,
    membershipPrice: number,
    paymentLink: string
}

interface SubscriptionDetails {
    daysLeft: number,
    reservationsLeft: number,
    reservationsTomorrow: number,
    reservationsTotal: number,
    weekReservations: number
}

interface ActiveReservation {
    coachName: string,
    date: string,
    reservationId: number,
    sessionName: string
}

interface UserDetails {
    activeReservations: ActiveReservation[],
    purchasesDetails: PurchaseDetails[],
    subscriptionDetails: SubscriptionDetails,
    user: UserInfo,
}

interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    accessToken: string,
    role: string
}

interface SignupRequest {
    email: string,
    password: string,
    name: string
}
