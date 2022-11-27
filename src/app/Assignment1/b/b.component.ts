import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  val2: string = "";

  @Output() parcomp: EventEmitter<any> = new EventEmitter();

  @Input() val = "";

  constructor() { }

  ngOnInit(): void {
  }
  onclick2(event2: string) {
    this.parcomp.emit(event2)
  }
}
