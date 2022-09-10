import { TestBed } from '@angular/core/testing';

import { JobRequestCrudService } from './job-request-crud.service';

describe('JobRequestCrudService', () => {
  let service: JobRequestCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobRequestCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
