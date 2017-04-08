import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evol-chart',
  templateUrl: './evol-chart.component.html',
  styleUrls: ['./evol-chart.component.css']
})
export class EvolChartComponent implements OnInit {




  // Pie
  public pieChartLabels: string[] = ['Most polluted', 'Medium pollution', 'Cleanest city', 'bestbla'];
  public pieChartData: number[] = [200, 700, 300, 100];
  public pieChartType = 'pie';

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
