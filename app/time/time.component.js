System.register(['angular2/core', './time.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, time_service_1;
    var TimeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (time_service_1_1) {
                time_service_1 = time_service_1_1;
            }],
        execute: function() {
            TimeComponent = (function () {
                function TimeComponent(_timeService) {
                    this._timeService = _timeService;
                }
                TimeComponent.prototype.ngOnInit = function () {
                    this.getCurrentTime();
                    this.ping();
                };
                TimeComponent.prototype.ping = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        _this.getCurrentTime();
                    }, 1000);
                };
                TimeComponent.prototype.getCurrentTime = function () {
                    this.time = this._timeService.getTime();
                };
                TimeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-time',
                        template: "\n  <span class=\"time\">{{time | date:\"MMMM dd hh:mm:ss\"}}</span>\n  ",
                        styles: ['.error {color:red;}'],
                        providers: [time_service_1.TimeService]
                    }), 
                    __metadata('design:paramtypes', [time_service_1.TimeService])
                ], TimeComponent);
                return TimeComponent;
            })();
            exports_1("TimeComponent", TimeComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=time.component.js.map