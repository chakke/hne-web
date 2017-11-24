import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-header',
  templateUrl: 'fb-header.html'
})
export class FbHeaderComponent {
 
  @Input() placeholder: string = "Nhập từ khóa tìm kiếm";

  constructor() { 
  }

}
