import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evol-chart2012',
  templateUrl: './evol-chart2012.component.html',
  styleUrls: ['./evol-chart2012.component.css']
})
export class EvolChart2012Component implements OnInit {




  // Pie
  public pieChartLabels: string[] = ['Most polluted', 'Medium pollution', 'Cleanest city', 'bestbla'];
  public pieChartData: number[] = [500, 300, 100, 100];
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
