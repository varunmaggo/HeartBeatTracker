import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartrateListComponent } from './heartrate-list.component';

describe('HeartrateListComponent', () => {
  let component: HeartrateListComponent;
  let fixture: ComponentFixture<HeartrateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartrateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartrateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
