System.register(['angular2/platform/browser', 'rxjs/Rx', './song/song.component', './time/time.component', './weather/weather.component'], function(exports_1) {
    var browser_1, song_component_1, time_component_1, weather_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (song_component_1_1) {
                song_component_1 = song_component_1_1;
            },
            function (time_component_1_1) {
                time_component_1 = time_component_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            }],
        execute: function() {
            //TODO CTA Component
            browser_1.bootstrap(song_component_1.SongComponent);
            browser_1.bootstrap(time_component_1.TimeComponent);
            browser_1.bootstrap(weather_component_1.WeatherComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map