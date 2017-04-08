/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvolChart2011Component } from './evol-chart2011.component';

describe('EvolChart2011Component', () => {
  let component: EvolChart2011Component;
  let fixture: ComponentFixture<EvolChart2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolChart2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolChart2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
