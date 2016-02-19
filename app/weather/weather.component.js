System.register(['angular2/core', 'angular2/http', './weather.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, weather_service_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.test = 1;
                }
                WeatherComponent.prototype.ngOnInit = function () {
                    this.getCurrentWeather();
                    this.ping();
                };
                WeatherComponent.prototype.ping = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        _this.getCurrentWeather();
                        _this.test++;
                    }, 60000); //1 minute in milliseconds
                };
                WeatherComponent.prototype.getCurrentWeather = function () {
                    this.temperature = this._weatherService.search();
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'my-weather',
                        template: "\n  \n    <span class=\"weather\"> {{temperature | async}} &#8457;</span>\n  \n  ",
                        providers: [http_1.JSONP_PROVIDERS, weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherComponent);
                return WeatherComponent;
            })();
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=weather.component.js.map