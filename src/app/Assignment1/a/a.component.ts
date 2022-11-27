import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  out=""
  data = ""

  constructor() { }

  onClick1(event1 : string){
    this.out= event1
  }

  parcomp(event2: string){
    this.data = event2
  }
  ngOnInit(): void {
  }

}
