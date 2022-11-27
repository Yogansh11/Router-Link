import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  timer: number = 0;
  timeoutId!: ReturnType<any>;
  Even:number = 0;
  Odd: number = 0;

  constructor() {
  }
  startTimer() {
    if (this.timeoutId) return;
    this.timeoutId = setInterval(() => {
      this.timer++;
      if(this.timer %2 === 0){
        this.Even++;
      }
      if(this.timer % 2 === 1){
        this.Odd++;
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timeoutId);
    this.timeoutId = 0;
  }
  ngOnInit(): void {
  }

}
