import { TestBed, inject } from '@angular/core/testing';

import { DinnerTableService } from './dinner-table.service';

describe('DinnerTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinnerTableService]
    });
  });

  it('should be created', inject([DinnerTableService], (service: DinnerTableService) => {
    expect(service).toBeTruthy();
  }));
});
