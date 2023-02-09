import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { commonService } from '../app.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private route: Router, private commonService: commonService) { 
    console.log(this.route.getCurrentNavigation().extras.state)
  }

  public receiveData
  public toggleDirective:boolean

  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      this.receiveData = res
      console.log(this.receiveData)
    })
  }

  notShowDirectictiveToggle() {
    this.toggleDirective = !this.toggleDirective
  }

}
