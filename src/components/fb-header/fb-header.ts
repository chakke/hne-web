import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Content, Platform } from 'ionic-angular';
import { Menu } from '../../providers/football/interfaces/menu';
import { Observable } from 'rxjs/Observable';
import { AppControllerProvider } from '../../providers/football/app-controller/app-controller';

@Component({
  selector: 'fb-header',
  templateUrl: 'fb-header.html'
})
export class FbHeaderComponent {
  @Input() placeholder: string = "Tìm kiếm";
  @Input() content: Content;
  @Output() onSearch = new EventEmitter<string>();

  searchTerm: string = "";
  isMenuToggled = false;
  isInSmallScreen = false;
  maxSmallScreenWidth = 768;

  headerElement: HTMLElement;
  logoElement: HTMLElement;
  menuElement: HTMLElement;

  menuItems: Array<Menu> = [];
  homePage = "FbHomePage";
  constructor(platform: Platform, private appController: AppControllerProvider) {
    this.menuItems = this.appController.getMenu();
    platform.ready().then(() => {
      let width = platform.width();
      if (width < this.maxSmallScreenWidth) {
        this.isInSmallScreen = true;
      } else {
        this.isInSmallScreen = false;
      }
      platform.resize.subscribe(() => {
        let width = platform.width();
        if (width < this.maxSmallScreenWidth) {
          this.isInSmallScreen = true;
          this.resetAttribute();
        } else {
          this.isInSmallScreen = false;
        }
      })
    })
  }

  ngAfterViewInit() {
    this.menuElement = document.getElementById("menu");
    this.headerElement = document.getElementById("fb-header");
    this.logoElement = document.getElementById("logo");
    if (this.content) {
      this.content.ionScroll.subscribe(() => {
        if (!this.isInSmallScreen) {
          let height = this.menuElement.offsetHeight;
          let scrollTop = this.content.scrollTop;
          if (scrollTop == 0) {
            this.resetAttribute();
          }
          if (scrollTop > 2 * height) {
            if (!this.headerElement.classList.contains("fixed-top")) {
              this.resetAttribute();
              this.headerElement.classList.add("fixed-top");
            }
          } else {
            if (this.headerElement.classList.contains("fixed-top")) {
              this.headerElement.classList.remove("fixed-top");
            }
            this.logoElement.style.height = 3 * height - scrollTop + "px";
            this.logoElement.style.maxWidth = 30 - 20 * scrollTop / (2 * height) + "%";
          }
        }
      })
    }
  }

  resetAttribute() {
    this.headerElement.classList.remove("fixed-top");
    this.logoElement.style.height = null;
    this.logoElement.style.maxWidth = null;
  }

  search() {
    if (this.searchTerm) {
      console.log("on search");
      this.onSearch.emit(this.searchTerm);
    } else {
    }
  }

  clearSearch() {
    this.searchTerm = "";
  }

  toggleMenu() {
    this.isMenuToggled = !this.isMenuToggled;
  }

  gotoRootPage() {
    this.appController.setRootPage(this.homePage);
  }

  menuItemClick(menu: Menu) {
    this.appController.setRootPage(menu.page);
  }
}
