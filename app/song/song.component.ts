import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {SongService} from './song.service';

@Component({
  selector: 'my-song',
  template: ` 
      <div *ngFor="#item of items | async; #i = index ">
        <div *ngIf="i < 1">
            <div class="song">{{item.artist['#text']}} - {{item.name}} - {{item.album['#text']}}</div>
            <div>
              <img src="{{item.image[3]['#text']}}" width="400" height="400"/>
            </div>
        </div>

      </div>
    

  `,
  providers:[JSONP_PROVIDERS, SongService]
})
export class SongComponent {

  constructor (private _songService: SongService) {}
  items: Observable<string[]>;
  private timer;

  ngOnInit() { 
      this.search(); 
      this.ping();
  }


  ping() {

    this.timer = setInterval(() {
      this.search();
    }, 10000);

  }

  search () {
    
    this.items = this._songService.search();
    
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/