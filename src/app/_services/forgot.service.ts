import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http, Headers,RequestOptions } from '@angular/http';
@Injectable()
export class ForgotService {

  options: any;
   authorization:string;
  postURL:string;
  
  constructor(private http: HttpClient) { }
  
   postData(email:String): Observable<any> {
    return this.http.post('http://localhost:8080/sendmail',email)
            .map((response: Response) => {
                console.log(response)
               
                let msg=response.body.getReader.toString();

                console.log(msg);

            });  
            
          }

          setPassword(password:String,token:String): Promise<any> {
            debugger;
            this.authorization="Token "+token;
    
            console.log(this.authorization);
            const headers = new Headers();
           //var reqHeader=new HttpHeaders();
           headers.append('authorization',this.authorization);
           headers.append('Content-Type', 'application/json');
           
           //reqHeader.append('Authorization', `Toek`);

            //this.createAuthorizationHeader(headers);
            let options = new RequestOptions({headers:headers});
           console.log(headers);
           debugger;
           return this.http
              .post('http://localhost:8080/api/reset',password,this.options) 
              .toPromise().catch(err =>{
                console.log(err);
              });  
           
           
             
  
          
   
                  }
                  createAuthorizationHeader(headers: Headers) {
   
                    
              
                    
                    headers.append('Authorization', this.authorization );
                     headers.append('Content-Type', 'application/json');
                  
                    console.log(headers);
                  }
}
