import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  @Output() countChanged = new EventEmitter();
  conunt: number = 0;

  increment(){
    this.conunt++;
    this.countChanged.emit(this.conunt)
  }

  decrement() {
    this.conunt--;
    this.countChanged.emit(this.conunt);
  }

}
