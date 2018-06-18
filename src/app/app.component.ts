import { Component } from '@angular/core';
import { WeatherService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string;
  constructor(public weatherService: WeatherService) {
    
  }

  onBtnClick(cityName: string) {
    console.log(cityName);
    this.weatherService.fetchWeatherInfo(cityName);
  }
}
