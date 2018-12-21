import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PomodoroActionTypes, Start, Stop, Reset } from '../Actions/pomodoro.action';
import { PomodoroService } from '../service/pomodoro.service';

@Injectable({
    providedIn: 'root'
})
export class PomodoroEffects {

    constructor(private http: HttpClient, private actions$: Actions, private pomodoroService: PomodoroService) {}

    @Effect()
    PomodoroStart$: Observable<Action> = this.actions$.pipe(
        ofType<Start>(PomodoroActionTypes.Start),
        tap(v => console.log('Start: ', v.payload)),
        map(data => {
            return {type: 'Start', payload: 'Start counter'};
        })
    )

    @Effect()
    PomodoroStop$: Observable<Action> = this.actions$.pipe(
        ofType<Stop>(PomodoroActionTypes.Stop),
        tap(v => console.log('Stop: ', v.payload)),
        map(data => {
            return {type: 'Stop', payload: 'Stop counter'};
        })
    )

    @Effect()
    PomodoroReset$: Observable<Action> = this.actions$.pipe(
        ofType<Reset>(PomodoroActionTypes.Reset),
        tap(v => console.log('Reset: ', v.payload)),
        map(data => {
            return {type: 'Reset', payload: 'Reset counter'};
        })
    )
}