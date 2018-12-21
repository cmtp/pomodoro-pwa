import { Action } from "@ngrx/store";

export enum PomodoroActionTypes {
  Start = "[Pomodoro] START_TIMER",
  Stop = "[Pomodoro] STOP_TIMER",
  Reset = "[Pomodoro] RESET_TIMER"
}

export class Start implements Action {
  readonly type = PomodoroActionTypes.Start;

  constructor(public payload: { isStart: boolean, timer: number }) {}
}

export class Stop implements Action {
  readonly type = PomodoroActionTypes.Stop;

  constructor(public payload: { isStop: boolean }) {}
}

export class Reset implements Action {
  readonly type = PomodoroActionTypes.Reset;

  constructor(public payload: { isReset: boolean }) {}
}

export type actions = Start | Stop | Reset;