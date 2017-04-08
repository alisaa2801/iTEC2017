/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvolChart2012Component } from './evol-chart2012.component';

describe('EvolChart2012Component', () => {
  let component: EvolChart2012Component;
  let fixture: ComponentFixture<EvolChart2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolChart2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolChart2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
