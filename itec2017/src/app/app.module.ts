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
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
