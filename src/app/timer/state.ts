export interface State {
    alert: Alert,
    time: number,
}

interface Alert {
    type: string,
    message: string
}