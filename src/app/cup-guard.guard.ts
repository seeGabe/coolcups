import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class CupGuardGuard implements CanActivate {
  
  constructor(private _authSvc: AuthenticateService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
      return this._authSvc.isLoggedOn();
    }
  
}
