import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';

@Injectable()
export class WeatherService {
  constructor(private jsonp: Jsonp) {}

  
  search () {
    
    let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?&appid=44db6a862fba0b067b1930da0d769e98';
    
    // var params = new URLSearchParams();
    // params.set('api_key','e7a52ff58dd9a577f219832fe1aea0c3');
    // params.set('user','ahanlon1987');
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');



     var params = new URLSearchParams()
     params.set('zip', '60614');
     params.set('callback', 'JSONP_CALLBACK');
     params.set('units', 'imperial');

    return this.jsonp
               .get(weatherUrl, {search : params})
               .map(response => <string> response.json().main.temp)
               .catch(this.handleError);



    // var toReturn = this.jsonp
    //             .get(weatherUrl, {search})
    //             .toPromise()
    //             .then((request) => request.json());
               
    
  }

private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/