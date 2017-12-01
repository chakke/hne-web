import { Component } from '@angular/core';

import { ScheduleMatch, MatchStatus, ScheduleItem } from '../../providers/football/interfaces/match';

import { DropDownElement, Dropdown } from '../fb-dropdown/fb-dropdown';

@Component({
  selector: 'fb-schedule',
  templateUrl: 'fb-schedule.html'
})
export class FbScheduleComponent {
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

  currentLeague = {
    id: -1,
    name: ""
  }

  leagueDropdown: Dropdown;
  teamDropdown: Dropdown;

  matches: Array<ScheduleItem> = [];

  mScheduleMatch: Array<ScheduleMatch> = [
    {
      id: 1,
      time: "2017-11-30 22:00",
      homeId: 1,
      homeFc: "MV CORP",
      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/MVCorp.png",
      homeResult: "0",
      guestId: 2,
      guestFc: "MOON",
      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/Moon5.png",
      guestResult: "0",
      stadium: "Sân ACB 2, Mỹ Đình, Hà Nội",
      status: MatchStatus.WAITING
    },
    {
      id: 2,
      time: "2017-11-30 18:00",
      homeId: 3,
      homeFc: "NGUYỄN TRÃI",
      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/NguyenTrai5.png",
      homeResult: "0",
      guestId: 4,
      guestFc: "DƯƠNG NỘI",
      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/DuongNoi5.png",
      guestResult: "0",
      stadium: "Sân ACB 2, Mỹ Đình, Hà Nội",
      status: MatchStatus.WAITING
    },
    {
      id: 3,
      time: "2017-11-28 18:00",
      homeId: 5,
      homeFc: "HANEL OCEAN",
      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/Hanel5.png",
      homeResult: "2",
      guestId: 6,
      guestFc: "VĂN MINH",
      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/VanMinh5.png",
      guestResult: "4",
      stadium: "Sân ACB 2, Mỹ Đình, Hà Nội",
      status: MatchStatus.DONE
    },
    {
      id: 4,
      time: "2017-10-30 19:00",
      homeId: 7,
      homeFc: "CƯỜNG QUỐC",
      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/CuongQuoc5.png",
      homeResult: "12",
      guestId: 8,
      guestFc: "THÀNH ĐỒNG",
      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/ThanhDong5.png",
      guestResult: "14",
      stadium: "Sân ACB 2, Mỹ Đình, Hà Nội",
      status: MatchStatus.DONE
    },
  ];


  constructor() {
    this.currentLeague = this.mDatas.leagues[0];
    console.log('Hello FbScheduleComponent Component');
    console.log(this.mScheduleMatch[0].time.substring(0, 10));
    this.onResponseData();
    this.setUpOptions();
  }

  onResponseData() {
    this.mScheduleMatch.forEach(match => {
      for (let i = 0; i < this.matches.length; i++) {
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
    console.log(this.matches);

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

  onSelectTeam(e){
    console.log(e);
    
  }

}
