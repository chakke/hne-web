import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppControllerProvider } from '../../providers/football/app-controller/app-controller';
import { Videos, Video } from '../../providers/football/interfaces/fb-videos';

/**
 * Generated class for the VideoLastestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'video-lastest',
  templateUrl: 'video-lastest.html'
})
export class VideoLastestComponent {
  @Input() videosId: string = "";
  videos: Observable<Videos>;
  videosList: Array<Video>;
  // video: Array<any> = [];

  // item1: any = [];
  // item2: any = [];
  // item3: any = [];
  // item4: any = [];
  // item5: any = [];
  isLoadingData : boolean = true;
  constructor(
    private appController: AppControllerProvider
  ) { }

  ngAfterViewInit() {
    this.videos = this.appController.getVideoById(this.videosId);
    this.videos.subscribe(data => {
      this.videosList = data.items;
      this.isLoadingData = false;
      // let allPost = data.items;
      // this.video.push(allPost)
      // this.item1 = allPost[0];
      // this.item2 = allPost[1];
      // this.item3 = allPost[2];
      // this.item4 = allPost[3];
      // this.item5 = allPost[4];
    })
  }

  // allVideo(){
  //   console.log(this.video);
  // }
}
