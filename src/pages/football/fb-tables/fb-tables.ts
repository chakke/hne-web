import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 
@IonicPage()
@Component({
  selector: 'page-fb-tables',
  templateUrl: 'fb-tables.html',
})
export class FbTablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mDatas = {
    title: "Bảng xếp hạng"
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FbTablesPage');
  }

}
