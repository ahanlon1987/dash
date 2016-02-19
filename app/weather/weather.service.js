System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(jsonp) {
                    this.jsonp = jsonp;
                }
                WeatherService.prototype.search = function () {
                    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?&appid=44db6a862fba0b067b1930da0d769e98';
                    // var params = new URLSearchParams();
                    // params.set('api_key','e7a52ff58dd9a577f219832fe1aea0c3');
                    // params.set('user','ahanlon1987');
                    // params.set('format', 'json');
                    // params.set('callback', 'JSONP_CALLBACK');
                    var params = new http_1.URLSearchParams();
                    params.set('zip', '60614');
                    params.set('callback', 'JSONP_CALLBACK');
                    params.set('units', 'imperial');
                    return this.jsonp
                        .get(weatherUrl, { search: params })
                        .map(function (response) { return response.json().main.temp; })
                        .catch(this.handleError);
                    // var toReturn = this.jsonp
                    //             .get(weatherUrl, {search})
                    //             .toPromise()
                    //             .then((request) => request.json());
                };
                WeatherService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Jsonp])
                ], WeatherService);
                return WeatherService;
            })();
            exports_1("WeatherService", WeatherService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=weather.service.js.map