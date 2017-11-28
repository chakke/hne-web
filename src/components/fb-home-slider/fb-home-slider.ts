import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";
import { FBSlides, FBSlidesItem } from '../../providers/football/interfaces/fb-slide';

/**
 * Generated class for the FbHomeSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-home-slider',
  templateUrl: 'fb-home-slider.html'
})
export class FbHomeSliderComponent {

  text: string;
  slidesList: Observable<FBSlides>;
  list_fillter = new Array<FBSlidesItem>();
  isLoadingData: boolean = true;
  lengthSLide: number = 0;
  numberImage : number = 3;
  constructor(private appController: AppControllerProvider) {
    console.log('Hello FbHomeSliderComponent Component');
    this.text = 'Hello World';
    if(screen.width > 767 && screen.width < 992){
      this.numberImage = 2;
    }
  }

  ngAfterViewInit() {
    this.slidesList = this.appController.getImageFBSlides();
    this.slidesList.subscribe(data => {
      console.log(data);
      for(let i = 0 ; i< 4; i++){
        this.list_fillter.push(data.items[i]);
      }
      this.lengthSLide = data.items.length;
      this.isLoadingData = false;
    })
  }

  slidesConainerID: string = "slidesContainer";
  sliderBox: string = "sliderBox";
  indexSlide: number = 0;
  preSlide() {
    let elmSlide = document.getElementById(this.slidesConainerID);
    let cx = (elmSlide.clientWidth / this.numberImage) * (this.indexSlide - 1);
    if (cx != 0) { cx = -cx; }
    console.log(cx);
    console.log(this.indexSlide);

    if (elmSlide) {
      if (this.indexSlide > 0) {
        this.indexSlide--;
        elmSlide.style.transform = "translate(" + cx + "px" + ",0px)";
      }
    }
  }
  nextSlide() {
    let elmSlide = document.getElementById(this.slidesConainerID);
    let cx = (elmSlide.clientWidth / this.numberImage) * (this.indexSlide + 1);
    console.log(cx);
    console.log(this.indexSlide);

    if (elmSlide) {
      if (this.indexSlide < this.lengthSLide - 3) {
        this.indexSlide++;
        elmSlide.style.transform = "translate(-" + cx + "px" + ",0px)";
      }
    }
  }
}
