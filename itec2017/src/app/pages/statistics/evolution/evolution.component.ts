import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  public hiddenChart = true;

  constructor() {
  }


  ngOnInit() {
  }

  public chartButton() {
    this.hiddenChart = !this.hiddenChart;


  }
}
