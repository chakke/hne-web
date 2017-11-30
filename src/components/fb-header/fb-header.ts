import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("header") headerElement: ElementRef;
  @ViewChild("logo") logoElement: ElementRef;
  @ViewChild("menu") menuElement: ElementRef;

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
    if (this.content) {
      this.content.ionScroll.subscribe(() => { 
        if (!this.isInSmallScreen) {
          let height = this.menuElement.nativeElement.offsetHeight;
          let scrollTop = this.content.scrollTop; 
          if (scrollTop == 0) {
            this.resetAttribute();
          }
          if (scrollTop > 2 * height) {
            if (!this.headerElement.nativeElement.classList.contains("fixed-top")) {
              this.resetAttribute();
              this.headerElement.nativeElement.classList.add("fixed-top");
            }
          } else {
            if (this.headerElement.nativeElement.classList.contains("fixed-top")) {
              this.headerElement.nativeElement.classList.remove("fixed-top");
            }
            this.logoElement.nativeElement.style.height = 3 * height - scrollTop + "px";
            this.logoElement.nativeElement.style.maxWidth = 30 - 20 * scrollTop / (2 * height) + "%";
          }
        }
      })
    }
  }

  resetAttribute() {
    this.headerElement.nativeElement.classList.remove("fixed-top");
    this.logoElement.nativeElement.style.height = null;
    this.logoElement.nativeElement.style.maxWidth = null;
  }

  search() {
    if (this.searchTerm) { 
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
