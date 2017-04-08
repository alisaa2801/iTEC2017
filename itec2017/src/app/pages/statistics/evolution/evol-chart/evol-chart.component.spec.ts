/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvolChartComponent } from './evol-chart.component';

describe('EvolChartComponent', () => {
  let component: EvolChartComponent;
  let fixture: ComponentFixture<EvolChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
