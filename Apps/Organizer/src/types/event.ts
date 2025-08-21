export interface checkPoint {
    id: string
    name: string
}

export interface eventData {
    eventName: string
    startDate: string
    endDate: string
    description: string
    checkPoints: checkPoint | null
}