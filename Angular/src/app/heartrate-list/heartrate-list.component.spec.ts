import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateListComponent } from './heartrate-list.component';

describe('HeartrateListComponent', () => {
  let component: HeartRateListComponent;
  let fixture: ComponentFixture<HeartRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeartRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
