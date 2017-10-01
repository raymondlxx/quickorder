import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerTablesComponent } from './dinner-tables.component';

describe('DinnerTablesComponent', () => {
  let component: DinnerTablesComponent;
  let fixture: ComponentFixture<DinnerTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
