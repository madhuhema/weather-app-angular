import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { TpwComponent } from './tpw/tpw.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DayTileComponent } from './day-tile/day-tile.component';
import { ChartComponent } from './chart/chart.component';
import { WeatherService } from './weather-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TpwComponent,
    TemperatureComponent,
    DayTileComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
