import {bootstrap}         from 'angular2/platform/browser';
import 'rxjs/Rx';

import {SongComponent}         from './song/song.component';
import {TimeComponent} 	from './time/time.component';
import {WeatherComponent} 	from './weather/weather.component';
//TODO CTA Component

bootstrap(SongComponent);
bootstrap(TimeComponent);
bootstrap(WeatherComponent);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/