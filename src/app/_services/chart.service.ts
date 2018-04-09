import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartService {

  constructor(private http: HttpClient) { }
  chartvalue:Object={};
  chart()
  {

    return this.http.get('http://localhost:8080/stock/getAll');

    
  }

}
