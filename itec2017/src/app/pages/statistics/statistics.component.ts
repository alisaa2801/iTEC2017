import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public hiddenEvolution = true;
  public hiddenComparative = true;
  public hiddenRegion = true;

  constructor() {
  }

  ngOnInit() {
  }

  public evolutionButton() {
    this.hiddenEvolution = !this.hiddenEvolution;
    if (!this.hiddenEvolution) {
      this.hiddenComparative = true;
      this.hiddenRegion = true;
    }
  }

  public comparativeButton() {
    this.hiddenComparative = !this.hiddenComparative;
    if (!this.hiddenComparative) {
      this.hiddenEvolution = true;
      this.hiddenRegion = true;
    }
  }

  public regionButton() {
    this.hiddenRegion = !this.hiddenRegion;
    if (!this.hiddenRegion) {
      this.hiddenEvolution = true;
      this.hiddenComparative = true;
    }
  }

}
