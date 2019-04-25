import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
    getWeather() {
      return this.http.get('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=Oshawa,ca&mode=xml&appid=4d85dcb6323407ea9d0d881bc59e904f');
    }
  }
