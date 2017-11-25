import { Input, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Table } from '../../providers/football/interfaces/table';
import { AppControllerProvider } from "../../providers/football/app-controller/app-controller";

@Component({
  selector: 'table-detail',
  templateUrl: 'table-detail.html'
})
export class TableDetailComponent {
  @Input() tableId: string = "";
  table: Observable<Table>;
  isDataUpdated = false;

  constructor(private appController: AppControllerProvider) {

  }
  ngAfterViewInit() {
    this.table = this.appController.getTableById(this.tableId);
    this.table.subscribe(data => {
      // console.log("data", data);
      this.isDataUpdated = true;
    })
  }

}
