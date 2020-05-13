import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  timeLeft = 60;
  tomatoTotal = 60;
  interval;
  subscribeTimer: any;

  ngOnInit() {
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  start() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.tomatoTotal;
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  restart() {
    this.interval = setInterval(() => {
      this.timeLeft = this.tomatoTotal;
    });
  }

}
