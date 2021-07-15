import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'form-self-focus',
  templateUrl: './form-self-focus.component.html',
  styleUrls: ['./form-self-focus.component.scss']
})
export class FormSelfFocusComponent implements OnInit {

  @ViewChild("input1") input1?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.info('init component');
    this.focus();
  }

  focus() {
    if (this.input1) {
      setTimeout(() => {
        this.input1?.nativeElement.focus();
      }, 100);
    } else {
      const firstInput = document.querySelector('form > input') as any;
      setTimeout(() => {
        firstInput?.focus();
      }, 100);
    }
  }

}
