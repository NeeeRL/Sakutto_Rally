export interface checkPoint {
    id: string
    name: string
    description: string
}

export interface preEventData {
    eventName: string
    rootURL: string
    startDate: string
    endDate: string
    description: string
    clearMessage: string
    checkPoints: checkPoint[] | null
}

export interface eventData {
    eventName: string
    rootURL: string
    startDate: string
    endDate: string
    description: string
    clearMessage: string
    checkPoints: checkPoint[]
}