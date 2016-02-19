import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {WeatherService}   from './weather.service';

@Component({
  selector: 'my-weather',
  template: `
  
    <span class="weather"> {{temperature | async}} &#8457;</span>
  
  `,
  providers:[JSONP_PROVIDERS, WeatherService]
})

export class WeatherComponent {
  
  constructor (private _weatherService: WeatherService) {}
  
  temperature: Observable<string>;
  private timer;
  test:any = 1;
 
  ngOnInit() { 
    this.getCurrentWeather();
    this.ping();
   }


  ping() {

    this.timer = setInterval(() {
      this.getCurrentWeather();
      this.test++;
    }, 60000); //1 minute in milliseconds

  }

  getCurrentWeather() {

    this.temperature = this._weatherService.search();
  }

  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/