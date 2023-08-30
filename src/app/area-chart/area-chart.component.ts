import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){

    this.chartOptions={

      chart: {
        type: 'spline'
    },
    title: {
        text: 'Recent Work Flow'
    },
    
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        
        labels: {
            format: '{value}'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    credits:{
      enabled:false
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        
        
        

    }, {
        
        data: [{
            y: 1.5,
            
            
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }]

    }

  }

}
