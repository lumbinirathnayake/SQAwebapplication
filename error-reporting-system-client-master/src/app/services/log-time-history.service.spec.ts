import { TestBed } from '@angular/core/testing';

import { LogTimeHistoryService } from './log-time-history.service';

describe('LogTimeHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogTimeHistoryService = TestBed.get(LogTimeHistoryService);
    expect(service).toBeTruthy();
  });
});
