import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    intercept(request: HttpRequest<any> ,  
              next:HttpHandler):Observable <HttpEvent<any>>{


                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                var token = currentUser.token;
                if(token) {
                    const clone = request.clone({
                        headers:request.headers.set("Authorization",
                        "Token "+token)
                    });
                    return next.handle(clone);
                }
                else {
                        return next.handle(request);
                }

    }
}