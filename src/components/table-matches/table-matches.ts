import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TableMatches } from '../../providers/football/interfaces/table-matches';
import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";

import { Page } from '../fb-schedule/fb-schedule';

@Component({
  selector: 'table-matches',
  templateUrl: 'table-matches.html'
})
export class TableMatchesComponent {
  @Input() tableId: string = "";
  @Output() clickMatch = new EventEmitter<number>();

  schedulePage = Page.HOME;
  
  table: Observable<TableMatches>;
  isDataUpdated = false;

  constructor(private appController: AppControllerProvider) {
    console.log('Hello TableMatchesComponent Component');
  }

  ngAfterViewInit() {
    this.table = this.appController.getMatchesByTableId(this.tableId);
    this.table.subscribe(data => {
      console.log("table-matches", data);
      this.isDataUpdated = true;
    })
  }

  onClickMatch(match){
    this.clickMatch.emit(match.id);
  }

}
