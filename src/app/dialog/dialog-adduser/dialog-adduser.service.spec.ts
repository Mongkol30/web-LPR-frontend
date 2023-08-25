import { TestBed } from '@angular/core/testing';

import { DialogAdduserService } from './dialog-adduser.service';

describe('DialogAdduserService', () => {
  let service: DialogAdduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogAdduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
