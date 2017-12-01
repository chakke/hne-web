import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";
import { News, NewsInterface } from "../../providers/football/interfaces/news";

@Component({
  selector: 'fb-list-news',
  templateUrl: 'fb-list-news.html'
})
export class FbListNewsComponent {

  @Input() newId: string = "";
  news: Observable<NewsInterface>;
  isDataUpdated: boolean = false;

  constructor(
    private appController: AppControllerProvider
  ) { }

  ngAfterViewInit() {
    this.news = this.appController.getNewsId(this.newId);
    this.news.subscribe(data =>{
      console.log(data.items);
      this.isDataUpdated = true;
      
    })
  }

  clickGoNewsDetail(item: any){
    this.appController.pushPage("FbNewsDetalPage",{id: item.id,item: item});
  }

}
