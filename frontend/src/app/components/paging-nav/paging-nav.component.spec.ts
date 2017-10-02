import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingNavComponent } from './paging-nav.component';

describe('PagingNavComponent', () => {
  let component: PagingNavComponent;
  let fixture: ComponentFixture<PagingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
