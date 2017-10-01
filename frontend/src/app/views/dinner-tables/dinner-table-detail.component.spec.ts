import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerTableDetailComponent } from './dinner-table-detail.component';

describe('DinnerTableDetailComponent', () => {
  let component: DinnerTableDetailComponent;
  let fixture: ComponentFixture<DinnerTableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerTableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
