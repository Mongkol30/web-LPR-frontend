import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdduserComponent } from './dialog-adduser.component';

describe('DialogAdduserComponent', () => {
  let component: DialogAdduserComponent;
  let fixture: ComponentFixture<DialogAdduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAdduserComponent]
    });
    fixture = TestBed.createComponent(DialogAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
