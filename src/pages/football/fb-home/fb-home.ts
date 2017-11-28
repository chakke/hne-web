import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fb-home',
  templateUrl: 'fb-home.html',
})
export class FbHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
  }

  onViewMatchDetail(matchId: number) {
    this.navCtrl.push("FbMatchDetailPage", { "id": matchId }, { animate: false });
  }

}
