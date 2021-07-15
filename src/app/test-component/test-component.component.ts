import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  @Input()
  dataItems?: any[];
  showInput: boolean = false;
  @ViewChild("input1") input1?: ElementRef;

  constructor() {
    console.info('constructor', this.input1);
  }

  ngOnInit(): void {
    console.info('render');
  }
  addItem() {
    this.dataItems?.push({ name: "test4" });
  }
  doShowInput() {
    this.showInput = !this.showInput;
    if (this.showInput) {
      setTimeout(() => {
        this.input1?.nativeElement.focus();
      }, 100);
    }
  }
}
