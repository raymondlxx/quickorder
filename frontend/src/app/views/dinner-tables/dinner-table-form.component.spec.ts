import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerTableFormComponent } from './dinner-table-form.component';

describe('DinnerTableFormComponent', () => {
  let component: DinnerTableFormComponent;
  let fixture: ComponentFixture<DinnerTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerTableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
