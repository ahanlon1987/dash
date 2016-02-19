import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';

@Injectable()
export class SongService {
  constructor(private jsonp: Jsonp) {}

  
  search () {
    
    let songUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks';
    
    var params = new URLSearchParams();
    params.set('api_key','e7a52ff58dd9a577f219832fe1aea0c3');
    params.set('user','ahanlon1987');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    var toReturn =  this.jsonp
               .get(songUrl, { search: params })
               .map(response => <string[]> response.json().recenttracks.track);
               
    return toReturn;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/