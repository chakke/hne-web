import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";

@Component({
  selector: 'fb-footer',
  templateUrl: 'fb-footer.html'
})
export class FbFooterComponent {

  @Input() newsPostId: string = "";
  newPost: Observable<any>;
  isUpdate: boolean = false;

  listNewPost: any = [];

  constructor(
    private appController: AppControllerProvider
  ) { }

  ngAfterViewInit() {
    this.newPost = this.appController.getNewsId(this.newsPostId);
    this.newPost.subscribe(data => {
      let allPost = data.items;
      this.listNewPost = [];
      this.listNewPost.push(allPost[0]);
      this.listNewPost.push(allPost[1]);
      this.listNewPost.push(allPost[2]);
    })
  }

  clickGoNews(){
    this.appController.pushPage("FbNewsPage");
  }
  clickGoSchedule(){
    this.appController.pushPage("FbScheducePage");
  }
  clickGoTop(){
    this.appController.pushPage("FbTablesPage");
  }
  clickGoLibraly(){
    this.appController.pushPage("FbGalleryPage");
  }
}
