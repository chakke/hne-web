import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-fb-scheduce',
  templateUrl: 'fb-scheduce.html',
})
export class FbScheducePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbScheducePage');
  }

}
