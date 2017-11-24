import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../providers/football/interfaces/menu';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fb-header',
  templateUrl: 'fb-header.html'
})
export class FbHeaderComponent {
  @Input() placeholder: string = "Nhập từ khóa tìm kiếm";
  @Input() contentScroll: Observable<number>;
  @Output()
  onSearch = new EventEmitter<string>();
  searchTerm: string = "";
  menuItems: Array<Menu> = [
    {
      id: 1,
      name: "Tin tức",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 1,
      name: "Lịch thi đấu & kết quả",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 1,
      name: "Bảng xếp hạng",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 1,
      name: "Video",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 1,
      name: "Hình ảnh",
      active: false,
      page: "",
      link: ""
    }
  ]

  constructor() {
  }

  ngAfterViewInit() {
    let menu = document.getElementById("menu");
    let header = document.getElementById("fb-header");
    let logo = document.getElementById("logo");
    let height = menu.offsetHeight;
    if (this.contentScroll) {
      this.contentScroll.subscribe(scrollTop => {
        if (scrollTop > 2 * height) {
          header.classList.add("fixed-top");
          logo.style.height = null;
        } else {
          header.classList.remove("fixed-top");
          logo.style.height = 3 * height - scrollTop + "px";
          logo.style.width = 30 -  20*scrollTop/(3*height) + "%";
          logo.style.maxWidth = 30 -  20*scrollTop/(2*height) + "%"; 
          menu.style.left = 30 -  20*scrollTop/(2*height) + "%"; 
        }
      })
    }
  }

  search() {
    console.log(this.searchTerm);
    if (this.searchTerm) {
      this.onSearch.emit(this.searchTerm);
    }
  }

  clearSearch() {
    this.searchTerm = "";
  }

}
