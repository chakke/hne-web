import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface DropDownElement {
  id: number;
  title: string;
}

export class Dropdown {
  title: string;
  options: Array<DropDownElement> = [];
  currentId: number = -1

  constructor(title: string, options: Array<DropDownElement>, currentId: number) {
    this.title = title;
    this.options = options;
    this.currentId = currentId;
  }

  setOptions(options: Array<DropDownElement>){
    this.options = options;
  }
}

@Component({
  selector: 'fb-dropdown',
  templateUrl: 'fb-dropdown.html'
})
export class FbDropdownComponent {
  @Input("dropdown") dropdown: Dropdown;
  @Output() onSelected = new EventEmitter();

  currentOption: DropDownElement = {
    id: -1,
    title: ""
  };

  constructor() {

  }

  ngAfterViewInit() {
    console.log("options", this.dropdown.options);
    if (this.dropdown.currentId > -1) {
      for (let i = 0; i < this.dropdown.options.length; i++) {
        if (this.dropdown.currentId == this.dropdown.options[i].id) {
          this.currentOption = this.dropdown.options[i];
        }
      }
    }
    else {
      this.currentOption = this.dropdown.options[0];
    }
    console.log(this.currentOption);

  }

  onChooseOption(option) {
    this.currentOption = option;
    this.onSelected.emit({ id: this.currentOption.id });
  }

}
