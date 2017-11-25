import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppControllerProvider } from '../../../providers/football/app-controller/app-controller';

import { Match } from '../../../providers/football/interfaces/match';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-fb-match-detail',
  templateUrl: 'fb-match-detail.html',
})
export class FbMatchDetailPage {

  mDatas: Observable<Match>;
  isDataUpdated = false;

  constructor(public navCtrl: NavController,
    public mAppControllerProvider: AppControllerProvider,
    public navParams: NavParams) {
      
    if (navParams.data['id']) {
      this.mDatas = this.onLoadData(navParams.data['id']);
      this.mDatas.subscribe(data => {
        console.log("match-detail", data);
        this.isDataUpdated = true;
      })
    }
  }

  ionViewDidLoad() {
  }

  onLoadData(matchId: number) {
    console.log("onLoadData");
    
    return this.mAppControllerProvider.getMatchById(matchId);
  }

}
