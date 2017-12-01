import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";
import { News, NewsInterface } from '../../providers/football/interfaces/news';

@Component({
  selector: 'main-news',
  templateUrl: 'main-news.html'
})
export class MainNewsComponent {

  @Input() newsId: string = "";
  news: Observable<NewsInterface>;
  isDataUpdated = false;

  post1 : any = [];
  post2 : any = [];
  post3 : any = [];
  
  constructor(
    private appController: AppControllerProvider
  ) { }
  ngAfterViewInit() {
    this.news = this.appController.getNewsId(this.newsId);
    this.news.subscribe(data => {
      let allPost = data.items;
      this.post1 = allPost[0];
      this.post2 = allPost[1];
      this.post3 = allPost[2];    
      this.isDataUpdated = true;
    })
  }

  clickGoViewAllNews(){
    this.appController.setRootPage("FbNewsPage");
  }

  clickGoNewsDetail(id: string){
    // if(id==1){

    // }else if(id ==2){

    // }else if( id==3){
    // }

    // this.appController.setRootPage("FbNewsDetalPage");
    this.appController.pushPage("FbNewsDetalPage",{id: id});
    
  }

}
