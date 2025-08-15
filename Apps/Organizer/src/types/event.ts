export interface checkPoint {
    id: string
    text: string
}

export interface eventData {
    eventName: string
    date: string
    description: string
    checkPoints: checkPoint | null
}