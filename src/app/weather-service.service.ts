import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Isummary } from './models/isummary';
import { Itemperature } from './models/itemperature';
import { Itpw } from './models/itpw';

@Injectable()
export class WeatherService {
  summary: Isummary;
  temperature: Itemperature;
  tpw: Itpw;
  constructor(private httpService: Http) { }

  fetchWeatherInfo(cityName: string) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.httpService.get(url)
      .subscribe((rsp) => {
        console.log(rsp.json());
        const data = rsp.json();
        this.summary = {
          cityName: data.city.name,
          day: data.list[0].dt * 1000,
          weatherCondition: data.list[0].weather[0].description
        };
        const iconId = data.list[0].weather[0].icon;
        this.temperature = {
          temperatureInK: Math.round(data.list[0].main.temp_max),
          temperatureInCelsius: Math.round(data.list[0].main.temp_max - 273.15),
          temperatureInFahrenheit: Math.round((9 / 5) * (data.list[0].main.temp_max - 273) + 32),
          currentWeatherImageURL: `http://openweathermap.org/img/w/${iconId}.png`
        }

        this.tpw = {
          pressure: Math.round(data.list[0]. main.pressure*0.033421),
          temperature: data.list[0]. main.humidity,
          windSpeed: Math.round(data.list[0].wind.speed)
        }
        console.log(this.tpw);
      });
  }

}