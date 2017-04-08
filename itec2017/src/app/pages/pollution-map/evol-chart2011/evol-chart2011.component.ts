import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evol-chart2011',
  templateUrl: './evol-chart2011.component.html',
  styleUrls: ['./evol-chart2011.component.css']
})
export class EvolChart2011Component implements OnInit {




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
