import * as PomodoroActions from '../Actions/pomodoro.action';
import { PomodoroActionTypes } from '../Actions/pomodoro.action';

export interface State {
    timer: Array<any>;
    isLoading: boolean;
    error: string
}

const  initialState: State = {
    timer: [],
    isLoading: false,
    error: ''
}

export function PomodoroReducer(state = [], action: PomodoroActions.actions) {
    switch (action.type) {
        case PomodoroActionTypes.Start:
            return action;
            break;
        case PomodoroActionTypes.Stop:
            return action;
            break;
        default:
        return state;
            break;
    }
}

export const getPomodoroState = (state: State) => state.timer;
export const getPomodoroAction = (action: any) => action.payload;