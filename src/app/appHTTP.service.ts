import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http"
import { Observable, of, timer } from "rxjs";
import { delay, dematerialize, endWith, materialize, mergeMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MokeHTTPRequest implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const {url,method,headers,body} = req
        return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())

        function handleRoute(){
            switch(true){
                case url.endsWith('/users') && method === 'GET':
                    return getUser();
                case url.endsWith('/getEmployee') && method == 'GET':
                    return getEmployee();
                case url.endsWith('/getEmployeeFamilyDetails') && method == 'GET':
                    return getEmployeeFamilyDetails();
                default:
                    return next.handle(req)
            }
        }

        function getUser(){
            let body = {
                name: 'Arnab',
                Age: '29',
                Job: 'IT Development'
            }
            return of ( new HttpResponse({status: 200, body}))
        }

        function getEmployee(){
            let body = [
                {
                    id: 1,
                    name:'Arnab',
                    designation:'SDE1',
                    address:'bangalore',
                    sex:'male'
                },
                {
                    id: 2,
                    name:'Disha',
                    designation:'SDE2',
                    address:'bangalore',
                    sex:'female'
                }
            ]
            return of(new HttpResponse({status:200, body}))
        }

        function getEmployeeFamilyDetails(){
            let body = [
                {
                    id: 1,
                    empId: 1,
                    child: 2,
                    maritrialStatus: 'Married',
                    PartnerName: 'Disha'
                },
                {
                    id: 2,
                    empId: 2,
                    child: 2,
                    maritrialStatus: 'Married',
                    PartnerName: 'Arnab'
                }
            ]
            return of(new HttpResponse({status:200, body}))
        }
    }

}

export const MokeHTTPRequestProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MokeHTTPRequest,
    multi: true
}