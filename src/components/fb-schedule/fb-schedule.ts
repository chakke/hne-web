import { Component } from '@angular/core';

@Component({
  selector: 'fb-schedule',
  templateUrl: 'fb-schedule.html'
})
export class FbScheduleComponent {

  mDatas = {
    leagues: [{
      id: 1,
      name: "Hanoi Elevencup - Season 1"
    }],
    options: [{
      id: 1,
      name: "Tất cả các đội"
    }]
  }

  currentLeague = 1;
  currentOption = 1;

  constructor() {
    console.log('Hello FbScheduleComponent Component');
    
  }

}
