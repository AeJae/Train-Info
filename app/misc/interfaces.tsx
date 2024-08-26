export interface BasicService {
    serviceUid: string,
    runDate: string,
    trainIdentity: string,
    runningIdentity: string,
    atocCode: string,
    atocName: string,
    serviceType: string,
    isPassenger: boolean,
}

interface Pair {
    description: string,
    publicTime: string
}

export interface Location {
    crs: string,
    description: string,
    gbttBookedDeparture: string,
    origin: Pair[],
    destination: Pair[],
    realtimeDeparture: string,
    platform: string,
    platformConfirmed: boolean,
    cancelReasonShortText: string | null,
    cancelReasonLongText: string | null
}

export interface DetailedService extends BasicService {
    origin: Pair[],
    destination: Pair[],
    locations: Location[]
}