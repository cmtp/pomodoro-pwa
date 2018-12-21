import { environment } from '../../environments/environment';
import { 
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store'

import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTimer from '../pomodoro/Reducers/pomodoro.reducer';

export interface State {
    timer: fromTimer.State,
    router: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State|any> = {
    auth: fromTimer.PomodoroReducer,
    router: fromRouter.routerReducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state,action);
    }
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];

export const  getTimerState = createFeatureSelector<fromTimer.State>('timer');

export const getAuth = createSelector(
    getTimerState,
    fromTimer.getPomodoroState
)