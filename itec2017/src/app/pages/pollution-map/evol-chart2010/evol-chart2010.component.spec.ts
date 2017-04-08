/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvolChart2010Component } from './evol-chart2010.component';

describe('EvolChart2010Component', () => {
  let component: EvolChart2010Component;
  let fixture: ComponentFixture<EvolChart2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolChart2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolChart2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
