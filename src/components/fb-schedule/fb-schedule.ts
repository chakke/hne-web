import { Component, Input, Output, ViewChild, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AppControllerProvider } from '../../providers/football/app-controller/app-controller';
import { ScheduleMatch, MatchStatus, ScheduleItem, Schedule } from '../../providers/football/interfaces/match';

import { DropDownElement, Dropdown } from '../fb-dropdown/fb-dropdown';

export enum Page {
  HOME, SCHEDULE
}

@Component({
  selector: 'fb-schedule',
  templateUrl: 'fb-schedule.html'
})
export class FbScheduleComponent {
  @Input("page") page: number = -1;
  @Output() loaded = new EventEmitter();
  @Input() parentSubject: Subject<any>;
  scrollSubject: Subject<string> = new Subject<string>();
  mMatchStatus: MatchStatus;
  from;
  mDatas = {
    leagues: {
      title: "Theo mùa giải",
      options: [{
        id: 0,
        title: "1"
      }, {
        id: 1,
        title: "Hanoi Elevencup - Season 1"
      }, {
        id: 2,
        title: "3"
      }, {
        id: 3,
        title: "4"
      }],
      currentId: 1
    },
    teams: {
      title: "Theo đội",
      options: [{
        id: 0,
        title: "Tất cả các đội"
      }, {
        id: 1,
        title: "đội A"
      }, {
        id: 2,
        title: "đội B"
      }, {
        id: 3,
        title: "đội C"
      }],
      currentId: 0
    },
  }
  loading;
  isLoading = false;

  currentLeague = {
    id: -1,
    name: ""
  }

  leagueDropdown: Dropdown;
  teamDropdown: Dropdown;

  matches: Array<ScheduleItem> = [];
  matchesLength = 0;

  mSchedule: Observable<Schedule>;
  mScheduleMatch: Array<ScheduleMatch>;


  constructor(public mAppControllerProvider: AppControllerProvider,
    public mChangeDetectorRef: ChangeDetectorRef) {
    console.log(MatchStatus);


    this.from = Page;
    this.currentLeague = this.mDatas.leagues[0];
    this.setUpOptions();
    this.getData();
  }

  // fix me
  ngAfterViewInit() {
    if (this.parentSubject) {
      this.parentSubject.subscribe(event => {
        if (!this.isLoading) {
          this.getData();
        }
      })

    }
  }

  ngOnDestroy() {
    if (this.parentSubject) {
      this.parentSubject.unsubscribe();
    }
  }

  getData() {
    console.log("let's get data");

    this.isLoading = true;
    try {
      this.mSchedule = this.mAppControllerProvider.getSchedule(1, this.matchesLength);
      this.mSchedule.subscribe(data => {
        console.log(data);
        this.onResponseData(data);
      })
    }
    catch (e) {
      this.isLoading = false;
      this.loaded.emit({ done: true });
    }
  }

  onResponseData(data) {
    data.matches.forEach(match => {
      for (let i = 0; i < this.matches.length; i++) {
        this.matchesLength++;
        if (this.matches[i].time == match.time.substring(0, 10)) {
          this.matches[i].matches.push(match);
          return;
        }
      }

      let item = new ScheduleItem();
      item.id = this.matches.length;
      item.time = match.time.substring(0, 10);
      item.matches = [match];
      this.matches.push(item);
    });
    this.isLoading = false;
    this.loaded.emit({ done: true });
    this.arrangeByTime();
    this.arrangeByStatus();
    this.mChangeDetectorRef.detectChanges();
    console.log(this.matches);
  }

  arrangeByTime() {
    // fix me
    this.matches.forEach(element => {
      for (let i = 0; i < element.matches.length - 1; i++) {
        for (let j = i + 0; j < element.matches.length; j++) {
          if (element.matches[i].time.substring(11, element.matches[i].time.length) > element.matches[j].time.substring(11, element.matches[j].time.length)) {
            let temp = element.matches[i];
            element.matches[i] = element.matches[j];
            element.matches[j] = temp;
          }
        }
      }
    });
    for (let n = 0; n < this.matches.length - 1; n++) {
      for (let m = n + 1; m < this.matches.length; m++) {
        if (this.matches[n].time < this.matches[m].time) {
          let temp = this.matches[n];
          this.matches[n] = this.matches[m];
          this.matches[m] = temp;
        }
      }
    }
  }

  arrangeByStatus() {
    this.matches.forEach(element => {
      for (let i = 0; i < element.matches.length - 1; i++) {
        for (let j = i + 0; j < element.matches.length; j++) {
          if (element.matches[i].status > element.matches[j].status) {
            let temp = element.matches[i];
            element.matches[i] = element.matches[j];
            element.matches[j] = temp;
          }
        }
      }
    });
  }


  setUpOptions() {
    {
      let leagueOptions: Array<DropDownElement> = [];

      this.leagueDropdown = new Dropdown(this.mDatas.leagues.title, [], this.mDatas.leagues.currentId);

      for (let i = 0; i < this.mDatas.leagues.options.length; i++) {

        let option: DropDownElement = {
          id: this.mDatas.leagues.options[i].id,
          title: this.mDatas.leagues.options[i].title
        }
        leagueOptions.push(option);
      }
      this.leagueDropdown.setOptions(leagueOptions);
    }

    {
      let teamOptions: Array<DropDownElement> = [];

      this.teamDropdown = new Dropdown(this.mDatas.teams.title, [], this.mDatas.teams.currentId);

      for (let i = 0; i < this.mDatas.teams.options.length; i++) {

        let option: DropDownElement = {
          id: this.mDatas.teams.options[i].id,
          title: this.mDatas.teams.options[i].title
        }
        teamOptions.push(option);
      }
      this.teamDropdown.setOptions(teamOptions);
    }
  }

  onSelectLeague(e) {
    console.log(e);

  }

  onSelectTeam(e) {
    console.log(e);

  }

}
