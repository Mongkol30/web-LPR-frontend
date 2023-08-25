import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(LoginserviceService).session)return true;
  inject(Router).navigateByUrl('/');

  return false;
};
