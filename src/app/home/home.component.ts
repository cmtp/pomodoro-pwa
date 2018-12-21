import { Component, OnInit } from '@angular/core';
import { State } from '../timer/state';

@Component({
  selector: 'pmd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  interval: any;
  state: State;

  defaultTime = 1500; // 25min
  shortBreak = 300; // 5min
  longBreak = 900; // 15min


  constructor() {
    this.state = {
      alert: {
        type: '',
        message: '',
      },
      time: 0
    };
  }

  ngOnInit() {
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    this.state.time = this.defaultTime;
    console.log(this.state);
  }

  onStart = (didStart: boolean) => {
    console.log(didStart);
    this.restartInterval();
  }

  restartInterval = () => {
    clearInterval(this.interval);

    this.interval = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    if(this.state.time === 0) {
      this.state.alert = {
        type: 'buz',
        message: 'Buzzzzzzz!'
      }
    }
    else {
      this.state.time = this.state.time - 1
    }
  }
}
