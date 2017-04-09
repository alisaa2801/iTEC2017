import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hiddenForm = true;
  public hiddenAbout = true;
  public hiddenStatistics = true;

  constructor() {
  }

  ngOnInit() {
  }

  public getInvolvedButton() {
    this.hiddenForm = !this.hiddenForm;
    if (!this.hiddenForm) {
      this.hiddenAbout = true;
      this.hiddenStatistics = true;
    }
  }

  public aboutButton() {
    this.hiddenAbout = !this.hiddenAbout;
    if (!this.hiddenAbout) {
      this.hiddenForm = true;
      this.hiddenStatistics = true;
    }
  }

  public statisticsButton() {
    this.hiddenStatistics = !this.hiddenStatistics;
    if (!this.hiddenStatistics) {
      this.hiddenForm = true;
      this.hiddenAbout = true;
    }
  }

}
