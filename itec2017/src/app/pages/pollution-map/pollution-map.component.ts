import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollution-map',
  templateUrl: './pollution-map.component.html',
  styleUrls: ['./pollution-map.component.css']
})
export class PollutionMapComponent implements OnInit {
  public hiddenChart = true;
  public hiddenChart2009 = true;
  public hiddenChart2010 = true;
  public hiddenChart2011 = true;
  public hiddenChart2012 = true;


  constructor() {
  }


  ngOnInit() {
  }

  public chartButton() {
    this.hiddenChart = !this.hiddenChart;
    if (!this.hiddenChart) {
      this.hiddenChart2009 = true;
      this.hiddenChart2010 = true;
      this.hiddenChart2011 = true;
      this.hiddenChart2012 = true;
    }
  }

  public chartButton2009() {
    this.hiddenChart2009 = !this.hiddenChart2009;
    if (!this.hiddenChart2009 ) {
      this.hiddenChart = true;
      this.hiddenChart2010 = true;
      this.hiddenChart2011 = true;
      this.hiddenChart2012 = true;
    }
  }

  public chartButton2010() {
    this.hiddenChart2010 = !this.hiddenChart2010;
    if (!this.hiddenChart2010 ) {
      this.hiddenChart = true;
      this.hiddenChart2009 = true;
      this.hiddenChart2011 = true;
      this.hiddenChart2012 = true;
    }
  }

  public chartButton2011() {
    this.hiddenChart2011 = !this.hiddenChart2011;
    if (!this.hiddenChart2011 ) {
      this.hiddenChart = true;
      this.hiddenChart2009 = true;
      this.hiddenChart2010 = true;
      this.hiddenChart2012 = true;
    }
  }
  public chartButton2012() {
    console.log(1234);
    this.hiddenChart2012 = !this.hiddenChart2012;
    if (!this.hiddenChart2012 ) {
      this.hiddenChart = true;
      this.hiddenChart2009 = true;
      this.hiddenChart2010 = true;
      this.hiddenChart2011 = true;
    }
  }
  }

