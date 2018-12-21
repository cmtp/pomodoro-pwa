import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as Pomodoro from '../pomodoro/Actions/pomodoro.action';



@Component({
  selector: 'pmd-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  error$ = this.store.select(state => state.Pomodoro.error);
  isLoading = this.store.select(state => state.Pomodoro.isloading);

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  startCountTimer() {
    console.log('start');
    this.store.dispatch(new Pomodoro.Start({isStart: true, timer: 25}))
  }

  stopCountTimer() {
    console.log('stop');
  }

  resetTimer() {
    console.log('reset');
  }
}
