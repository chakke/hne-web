import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-gallery',
  templateUrl: 'modal-gallery.html',
})
export class ModalGalleryPage {
  @ViewChild(Content) content: Content;

  mDatas = {
    id: -1,
    currentView: 0
  }
  // photosContainer;
  imgWidth = 0;
  marginSize = 16;

  images = ["http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    "http://www.hanoielevencup.com/uploads/media/61/IMG_2250-min.jpg",]

  tempImage = "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg";

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    if (navParams.data["id"]) {
      this.mDatas.id = navParams.data["id"];
    }
  }

  ionViewDidEnter() {
    let imgs = document.getElementsByClassName("photo");
    this.imgWidth = imgs[0].clientWidth;
    // this.photosContainer = document.getElementById("photos-container");


  }

  onClickClose() {
    this.navCtrl.pop({ animate: false });
  }

  getPhotosById(id: number) {

  }

  onClickPrevious() {
    if (this.mDatas.currentView > 0) {
      this.mDatas.currentView--;
    }
    console.log("onClickPrevious", this.mDatas.currentView);
    this.fixScrollLeft();
  }

  onClickNext() {

    if (this.mDatas.currentView < this.images.length - 1) {
      this.mDatas.currentView++;
    }
    console.log("onClickNext", this.mDatas.currentView);

    this.fixScrollLeft();

  }

  fixScrollLeft() {
    let c = document.getElementById("photos-container");
    let scrollLeft = c.scrollLeft;

    let fixedScrollLeft = this.mDatas.currentView * (this.imgWidth + this.marginSize) - 1 / 2 * this.content.getContentDimensions().contentWidth + 1 / 2 * this.imgWidth;

    console.log(fixedScrollLeft);

    // if (fixedScrollLeft > 0) {
    //   this.scrollLeftTo(fixedScrollLeft);
    // }
    c.scrollLeft = fixedScrollLeft;
  }

  moveToImg(index) {
    this.mDatas.currentView = index;
    this.fixScrollLeft();
  }

  // requestObject: any;
  // scrollLeftTo(fixedScrollLeft) {
  //   console.log(Math.abs(this.photosContainer.scrollLeft - fixedScrollLeft));

  //   if (Math.abs(this.photosContainer.scrollLeft - fixedScrollLeft) >= 10) {
  //     if (this.requestObject)
  //       cancelAnimationFrame(this.requestObject);
  //   }
  //   else {
  //     this.photosContainer.scrollLeft += (fixedScrollLeft - this.photosContainer.scrollLeft) / 10;
  //     this.requestObject = requestAnimationFrame(() => {
  //       this.scrollLeftTo(fixedScrollLeft);
  //     });
  //   }

  // }

}
