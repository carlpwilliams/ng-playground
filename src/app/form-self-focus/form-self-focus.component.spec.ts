import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelfFocusComponent } from './form-self-focus.component';

describe('FormSelfFocusComponent', () => {
  let component: FormSelfFocusComponent;
  let fixture: ComponentFixture<FormSelfFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelfFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelfFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
