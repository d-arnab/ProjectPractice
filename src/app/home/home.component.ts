import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, forkJoin } from 'rxjs';
import { commonService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private commonService: commonService, private router: Router) { 
  }

  data:any
  mockData: any
  FirstName: string = ''
  MiddleName: string = ''
  LastName:string = ''
  incomingCountFromChild: number

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.data = data.name
      console.log(this.data)
    })
  }

  sendData(){
    this.commonService.setData("sending data from Home")
  }

  getMockData(){
    this.commonService.getBackEndData('/users').subscribe(mockData => {
      this.mockData = mockData;
      console.log("this.mockData:",this.mockData)
    })
  }

  mergeAllGetMockData() {
    forkJoin([
      this.commonService.getBackEndData('/getEmployee'),
      this.commonService.getBackEndData('/getEmployeeFamilyDetails')
    ]).subscribe(([employee, address]) => {
      console.log("employee:",employee);
      console.log("address:",address);
    })
  }

  combineLatestGetMockData() {
    combineLatest([
      this.commonService.getBackEndData('/getEmployee'),
      this.commonService.getBackEndData('/getEmployeeFamilyDetails')
    ]).subscribe(([employee, address]) => {
      console.log("employee:",employee);
      console.log("address:",address);
    })
  }

  countChangedHandeler(incomingValue){
    this.incomingCountFromChild = incomingValue;
  }

  childRoute(pathTo:string){
    if(pathTo == 'Fourth'){
      this.router.navigate(['homeChild4'], {relativeTo: this.activatedRoute})
    }
    if(pathTo == 'Fifth'){
      this.router.navigate([{outlets:{testingMultipleOutlet:'homeChild5'}}], {relativeTo: this.activatedRoute})
    }
  }

}
