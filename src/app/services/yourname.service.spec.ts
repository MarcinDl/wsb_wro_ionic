import { TestBed } from '@angular/core/testing';

import { YournameService } from './yourname.service';

describe('YournameService', () => {
  let service: YournameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YournameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
