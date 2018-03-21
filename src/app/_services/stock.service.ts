import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RequestOptions,Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  constructor(private _http:HttpClient) { }
     
  dailyStock()
  {
    let headers = new Headers({ 'Authorization': 'Bearer '  });
   
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');

  
    let options = new RequestOptions({ headers: headers });
      return  this._http.get("http://samples.openweathermap.org/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
          .map(result => result);
  }

}
