import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, timer } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap, tap } from 'rxjs/operators';

const httpOption ={
    Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'abc'
    })
}



@Injectable({
    providedIn: 'root',
})
export class commonService {
    public subject
    
    constructor(private http: HttpClient){
        this.subject = new BehaviorSubject("started");
    }

    setData(data){
        return this.subject.next(data);
    }
    getData(){
        return this.subject.asObservable()
    }

    getBackEndData(url: string){
        if(url.endsWith('/getEmployeeFamilyDetails')){
           return  timer(5000).pipe(
                        switchMap(() => this.http.get<any>(url)),
                    )
        } else {
            return this.http.get<any>(url)
        }
    }
}