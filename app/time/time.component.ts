import {Component, OnInit} from 'angular2/core';
import {TimeService} from './time.service';

@Component({
  selector: 'my-time',
  template: `
  <span class="time">{{time | date:"MMMM dd hh:mm:ss"}}</span>
  `,
  styles: ['.error {color:red;}'],
  providers: [TimeService]
})

export class TimeComponent implements OnInit {

  constructor (private _timeService: TimeService) {}

  private time;
 
  ngOnInit() { 
    this.getCurrentTime();
    this.ping();
   }


  ping() {

    this.timer = setInterval(() {
      this.getCurrentTime();
    }, 1000);

  }

  getCurrentTime() {
    this.time = this._timeService.getTime();                  
  }

  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/