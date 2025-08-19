export interface checkPoint {
    id: string
    name: string
}

export interface eventData {
    eventName: string
    date: string
    description: string
    checkPoints: checkPoint | null
}