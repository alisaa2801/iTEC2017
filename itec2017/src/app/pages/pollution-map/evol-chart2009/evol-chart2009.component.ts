import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evol-chart2009',
  templateUrl: './evol-chart2009.component.html',
  styleUrls: ['./evol-chart2009.component.css']
})
export class EvolChart2009Component implements OnInit {




  // Pie
  public pieChartLabels: string[] = ['Bucuresti', 'Focsani', 'Calan', 'Buzau', 'Iasi'];
  public pieChartData: number[] = [15.98, 2.05, 12.6, 7.1, 10.3];
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
