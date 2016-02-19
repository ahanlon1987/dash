System.register(['angular2/core', 'angular2/http', './song.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, song_service_1;
    var SongComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (song_service_1_1) {
                song_service_1 = song_service_1_1;
            }],
        execute: function() {
            SongComponent = (function () {
                function SongComponent(_songService) {
                    this._songService = _songService;
                }
                SongComponent.prototype.ngOnInit = function () {
                    this.search();
                    this.ping();
                };
                SongComponent.prototype.ping = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        _this.search();
                    }, 10000);
                };
                SongComponent.prototype.search = function () {
                    this.items = this._songService.search();
                };
                SongComponent = __decorate([
                    core_1.Component({
                        selector: 'my-song',
                        template: " \n      <div *ngFor=\"#item of items | async; #i = index \">\n        <div *ngIf=\"i < 1\">\n            <div class=\"song\">{{item.artist['#text']}} - {{item.name}} - {{item.album['#text']}}</div>\n            <div>\n              <img src=\"{{item.image[3]['#text']}}\" width=\"400\" height=\"400\"/>\n            </div>\n        </div>\n\n      </div>\n    \n\n  ",
                        providers: [http_1.JSONP_PROVIDERS, song_service_1.SongService]
                    }), 
                    __metadata('design:paramtypes', [song_service_1.SongService])
                ], SongComponent);
                return SongComponent;
            })();
            exports_1("SongComponent", SongComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=song.component.js.map