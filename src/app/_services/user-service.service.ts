import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserServiceService {

  postURL:string;
  constructor(private http: HttpClient) { }
  
   postData(url, data): Promise<any> {
    this.postURL =  url;
    return this.http
      .post<User>(this.postURL, data)
      .toPromise()
      }

}
