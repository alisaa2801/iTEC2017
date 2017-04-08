import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hiddenForm = true;

  constructor() {
  }

  ngOnInit() {
  }

  public getInvolvedButton() {
    this.hiddenForm = false;
    console.log('Apaurgsn');
  }

}
