import { TestBed } from '@angular/core/testing';

import { StatemngmntService } from './statemngmnt.service';

describe('StatemngmntService', () => {
  let service: StatemngmntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatemngmntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
