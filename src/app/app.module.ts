import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';

import { MokeHTTPRequestProvider } from './appHTTP.service';
import { AttributeDirective } from './directives/attribute.directive';
import { NotShowDirective } from './directives/structureal.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeSecondChildComponent } from './home-second-child/home-second-child.component';
import { HomeThirdChildComponent } from './home-third-child/home-third-child.component';
import { HomeFourthChildComponent } from './home-fourth-child/home-fourth-child.component';
import { HomeFifthChildComponent } from './home-fifth-child/home-fifth-child.component';

const routes = [
  {path: 'home', component: HomeComponent, data :{name:"Angular"},
    children:[
      {path:'homeChild2', component: HomeSecondChildComponent},
      {path: 'homeChild3', component: HomeThirdChildComponent},
      {path: 'homeChild4', component: HomeFourthChildComponent},
      {path: 'homeChild5', component: HomeFifthChildComponent, outlet:"testingMultipleOutlet"}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'child1', component: Child1Component }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child1Component,
    AttributeDirective,
    NotShowDirective,
    CustomPipe,
    HomeChildComponent,
    HomeSecondChildComponent,
    HomeThirdChildComponent,
    HomeFourthChildComponent,
    HomeFifthChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    MokeHTTPRequestProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
