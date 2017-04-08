/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvolChart2009Component } from './evol-chart2009.component';

describe('EvolChart2009Component', () => {
  let component: EvolChart2009Component;
  let fixture: ComponentFixture<EvolChart2009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolChart2009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolChart2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
