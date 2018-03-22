import { Component, OnInit } from '@angular/core';
import {StockService} from '../../_services/stock.service';

import { Chart } from "chart.js";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart = [];

  constructor(private _stock:StockService) { }

  ngOnInit() {

     this.chart = new Chart('areaChart', {
      type: 'line',
      data: {
          labels: ["19 March","20 March","30 March","31 March","32 March","33 March","34 March"],
          datasets: [{
              label: 'SBI',
              data: [12, 19, 3, 5, 2, 3,10],
              
              borderColor: [
                  'rgba(255,99,132,1)'
              ],
              
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }],              
              xAxes:[{
                 display:true
               }]
          }
      }
  });
  this.chart = new Chart('lineChart', {
    type: 'radar',
    data: {
        labels: ["19 March","20 March","30 March","31 March","32 March","33 March","34 March"],
        datasets: [{
            label: 'SBI',
            data: [12, 19, 3, 5, 2, 3,10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'                  
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    // this._stock.dailyStock()
    //   .subscribe(res => {
    //      // console.log(res);

    //      let temp_max = res['list'].map(res => res.main.temp_max);
    //      let temp_min = res['list'].map(res => res.main.temp_min);
    //      let alldates = res['list'].map(res => res.dt);

    //      let weatherDates = []
    //      alldates.forEach(res => {
    //        let jsdate = new Date(res * 1000);
    //        weatherDates.push(jsdate.toLocaleTimeString('en',{year:'numeric',month:'short',day:'numeric'}))
    //      });
      
  
    //      console.log(weatherDates);
    //      this.chart = new Chart('canvas',{
    //        type:'line',
    //        data: {
    //          labels:weatherDates,
    //          datasets:[
    //            {
    //              data:temp_max,
    //              borderColor:'#3cba9f',
    //              fill:false
    //            },
    //            {
    //             data:temp_min,
    //             borderColor:'#3cba9f',
    //             fill:false
    //           }
              
    //          ]

    //        },
    //        options:{
    //          legend:{
    //            display:false
    //          },
    //          scales:{
    //            xAxes:[{
    //              display:true
    //            }],
    //            yAxes:[{
    //              display:true
    //            }]
    //          }
    //        }
    //      });
    //     })
  }

}
