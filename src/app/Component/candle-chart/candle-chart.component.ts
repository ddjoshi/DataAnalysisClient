import { Component, OnInit } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartService } from '../../_services/chart.service';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.css']
})
export class CandleChartComponent implements OnInit {
  constructor(private chartservice:ChartService) { }
  
  

    ngOnInit()  {
      this.chartservice.chart().subscribe((data)=>
     {
     // this.arrBirds = data as number [];

        console.log(data);

/* new code start  */
this.candleChartData.dataTable = [['dates', 'open', 'close','high','low']];

for(let i=0;i<99;i++) {
  var chartdata = [];
  //chartdata.push(data[i].id);
  chartdata.push(data[i].dates);
  chartdata.push(data[i].open);
  chartdata.push(data[i].close);
  chartdata.push(data[i].high);
  chartdata.push(data[i].low);
  //chartdata.push(data[i].dates);
  this.candleChartData.dataTable.push(chartdata);
}
/*new code end */

        // id=[];
        // let open=[]
        // let volume=[]
        // let close=[]
        // let dates=[]
        
        // for(let i=0;i<99;i++)
        //   {
            
        //     id[i]=data[i]["id"];
        //     open[i]=data[i]["open"];
        //     volume[i]=data[i]["volume"];
        //     close[i]=data[i]["close"];
        //     dates[i]=data[i]["dates"];
        //     console.log(id[i]);
        //     console.log(open[i]);
        //     console.log(volume[i]);
        //     console.log(close[i]);
        //     console.log(dates[i]);
        //   }

     
        //this.barChartData.dataTable.push(id[0]);
      
      //  let barChartdressedup =JSON.parse(JSON.stringify(this.barChartData)); // initialized object of barchart data
      //  barChartdressedup[0].data = [api.data, api.data]; //API Data 
      //   this.barChartdressedup= barChartdressedup; // initialized object = api data
          
        });

        //this.barChartData.dataTable.push(id[0]);
        

}
candleChartData =  {

    chartType: 'CandlestickChart',
    //datasource="data/data.json";
    dataTable: [],
    //['id', 'volume', 'open', 'close', 'dates'],
     
     //[id[1], '1212', 122, 122, dates[1]],
     // ['2006/07',157 , 1120, 599, 1268]
      // ['2006/07', 157, 1167, 587, 807, 397, 623],
      // ['2007/08', 139, 1110, 615, 968, 215, 609.4],
      //[data[i].id, 136, 691, 629, 1026]
    //],
    
    options: {'title': 'Tasks'},
  };
  public ready1(event: ChartReadyEvent) {
     console.log("it works");
    
     }
}

