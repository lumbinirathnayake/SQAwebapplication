import { TestBed } from '@angular/core/testing';

import { TestCaseFeatureGroupService } from './test-case-feature-group.service';

describe('TestCaseFeatureGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestCaseFeatureGroupService = TestBed.get(TestCaseFeatureGroupService);
    expect(service).toBeTruthy();
  });
});
