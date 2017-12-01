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
  @Input() isHomePage : boolean;

  showTable : number = 1;

  constructor(private appController: AppControllerProvider) {
    let x = screen.width;
    if( x < 576 || this.isHomePage){
      this.showTable = 1;
    }else if(x > 576 && x< 768){
      this.showTable = 2;
    }else if(x> 768){
      this.showTable = 3;
    }
    console.log(this.showTable);
    
  }
  ngAfterViewInit() {
    this.table = this.appController.getTableById(this.tableId);
    this.table.subscribe(data => {
      // console.log("data", data);
      this.isDataUpdated = true;
    })
  }

  goToFBTables(){
    this.appController.setRootPage("FbTablesPage");
  }

}
