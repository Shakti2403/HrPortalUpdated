import { TestBed } from '@angular/core/testing';

import { LoginCrudService } from './login-crud.service';

describe('LoginCrudService', () => {
  let service: LoginCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
