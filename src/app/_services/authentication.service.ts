import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    options: any;
    headers: Headers;
    public token: string;
    

    constructor(private http: Http,private router:Router) {
        
        this.headers = new Headers({ 'Content-Type':'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    login(email: string, password: string): Observable<boolean> {
        
        return this.http.post('http://localhost:8080/login',JSON.stringify({ userName: email, password: password }),this.options)
            .map((response: Response) => {
                    console.log(response)
        
                let token = response.json() && response.json().token;
                if (token) {
        
                    this.token = token;

        
                    localStorage.setItem('currentUser', JSON.stringify({ email:email, token: token }));

        
                    return true;
                } else {
        
                    return false;
                }
            });
    }

    logout(): void {
        
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }
}