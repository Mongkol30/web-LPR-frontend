import { TestBed } from '@angular/core/testing';

import { DialogEdituserService } from './dialog-edituser.service';

describe('DialogEdituserService', () => {
  let service: DialogEdituserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogEdituserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
