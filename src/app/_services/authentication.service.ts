import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    options: any;
    headers: Headers;
    public token: string;
    //private email:string;

    constructor(private http: Http) {
        // set token if saved in local storage
        this.headers = new Headers({ 'Content-Type':'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    login(email: string, password: string): Observable<boolean> {
        //debugger;
        return this.http.post('https://reqres.in/api/login/',JSON.stringify({ email: email, password: password }),this.options)
            .map((response: Response) => {
                    console.log(response)
                //login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email:email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    /*logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }*/
}