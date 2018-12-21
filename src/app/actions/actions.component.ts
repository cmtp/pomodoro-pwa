import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'pmd-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Output() start = new EventEmitter<boolean>();
  didStart = false;

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    console.log('click on start');
    this.didStart = true;
    this.start.emit(this.didStart);
  }
}
