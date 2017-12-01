import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dropdown, DropDownElement } from '../../../components/fb-dropdown/fb-dropdown';

 
@IonicPage({
  segment: 'bxh'
})
@Component({
  selector: 'page-fb-tables',
  templateUrl: 'fb-tables.html',
})
export class FbTablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setUpOptions();
    
  }
  mDatas = {
    title: "Bảng xếp hạng",
    leagues: {
      title: "Theo mùa giải",
      options: [{
        id: 0,
        title: "Hanoi Elevent cup - Season 1"
      }, {
        id: 1,
        title: "Hanoi Elevencup - Season 2"
      }],
      currentId: 1
    }, 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FbTablesPage');
  }
  leagueDropdown: Dropdown;
  
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
  }

  onSelectLeague(e) {
    console.log(e);

  }
}
