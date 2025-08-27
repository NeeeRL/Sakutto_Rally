export interface checkPoint {
    id: string
    name: string
    description: string
}

export interface preEventData {
    eventName: string
    startDate: string
    endDate: string
    description: string
    checkPoints: checkPoint[] | null
}

export interface eventData {
    eventName: string
    startDate: string
    endDate: string
    description: string
    checkPoints: checkPoint[]
}