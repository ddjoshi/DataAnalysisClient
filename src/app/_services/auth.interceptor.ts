import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    intercept(request: HttpRequest<any> ,  
              next:HttpHandler):Observable <HttpEvent<any>>{


                const token = localStorage.getItem("currentUser");

                if(token) {
                    const clone = request.clone({
                        headers:request.headers.set("Authorization",
                        "Bearer "+token)
                    });
                    return next.handle(clone);
                }
                else {
                        return next.handle(request);
                }

    }
}