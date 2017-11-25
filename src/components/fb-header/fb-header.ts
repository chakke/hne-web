import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
  fixedTop = false;
  showSearchInput = false;
  isMenuToggled = false;

  menuItems: Array<Menu> = [
    {
      id: 1,
      name: "Tin tức",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 2,
      name: "Lịch thi đấu & kết quả",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 3,
      name: "Bảng xếp hạng",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 4,
      name: "Video",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 5,
      name: "Hình ảnh",
      active: false,
      page: "",
      link: ""
    },
    {
      id: 6,
      name: "Câu lạc bộ",
      active: false,
      page: "",
      link: ""
    }
  ]

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    let menu = document.getElementById("menu");
    let header = document.getElementById("fb-header");
    let logo = document.getElementById("logo");
    let searchBar = document.getElementById("searchbar");
    let height = menu.offsetHeight;
    if (this.contentScroll) {
      this.contentScroll.subscribe(scrollTop => {
        if (scrollTop > 2 * height) {
          header.classList.add("fixed-top");
          logo.style.height = null;
          logo.style.width = null;
          logo.style.maxWidth = null;
          menu.style.width = null;
          this.fixedTop = true;
        } else {
          header.classList.remove("fixed-top");
          logo.style.height = 3 * height - scrollTop + "px";
          logo.style.width = 30 - 20 * scrollTop / (3 * height) + "%";
          logo.style.maxWidth = 30 - 20 * scrollTop / (2 * height) + "%";
          menu.style.width = 70 + 20 * scrollTop / (2 * height) + "%";
          this.fixedTop = false;
        }
        this.cdr.detectChanges();
      })
    }
  }

  search() {
    if (this.searchTerm) {
      console.log("on search");
      this.onSearch.emit(this.searchTerm);
      this.showSearchInput = true;
    } else {
      if (this.fixedTop) {
        this.showSearchInput = !this.showSearchInput;
      }
    }
  }

  clearSearch() {
    this.searchTerm = "";
    this.showSearchInput = false;
  }

  toggleMenu() {
    console.log("toggle menu");
    this.isMenuToggled = !this.isMenuToggled;
  }
}
