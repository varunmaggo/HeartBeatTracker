import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartrateEditComponent } from './heartrate-edit.component';

describe('HeartrateEditComponent', () => {
  let component: HeartrateEditComponent;
  let fixture: ComponentFixture<HeartrateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartrateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartrateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
