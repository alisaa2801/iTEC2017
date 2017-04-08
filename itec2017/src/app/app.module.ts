import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SubtitleComponent} from './pages/subtitle/subtitle.component';
import {RouterModule, Routes} from '@angular/router';
import { PollutionMapComponent } from './pages/pollution-map/pollution-map.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AboutComponent } from './pages/about/about.component';
import { EvolutionComponent } from './pages/statistics/evolution/evolution.component';
import { ComparativeComponent } from './pages/statistics/comparative/comparative.component';
import { RegionComponent } from './pages/statistics/region/region.component';
import {AnychartDirective, AnychartService} from 'anychart-angular2/components';
import { EvolChartComponent } from './pages/statistics/evolution/evol-chart/evol-chart.component';
import {ChartsModule} from 'ng2-charts';
import { EvolChart2009Component } from './pages/pollution-map/evol-chart2009/evol-chart2009.component';
import { EvolChart2010Component } from './pages/pollution-map/evol-chart2010/evol-chart2010.component';
import { EvolChart2011Component } from './pages/pollution-map/evol-chart2011/evol-chart2011.component';
import { EvolChart2012Component } from './pages/pollution-map/evol-chart2012/evol-chart2012.component';


const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'pollution-map', component: PollutionMapComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubtitleComponent,
    PollutionMapComponent,
    GetInvolvedComponent,
    StatisticsComponent,
    AboutComponent,
    EvolutionComponent,
    ComparativeComponent,
    RegionComponent,
    AnychartDirective,
    EvolChartComponent,
    EvolChart2009Component,
    EvolChart2010Component,
    EvolChart2011Component,
    EvolChart2012Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule
  ],
  providers: [ AnychartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
