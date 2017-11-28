import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-gallery',
  templateUrl: 'modal-gallery.html',
})
export class ModalGalleryPage {

  mDatas = {
    id: -1
  }

  images = ["http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg","http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg"]

  tempImage = "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg";

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    if (navParams.data["id"]) {
      this.mDatas.id = navParams.data["id"];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGalleryPage');
  }

  onClickClose() {
    this.navCtrl.pop({ animate: false });
  }

  getPhotosById(id: number) {

  }

}
