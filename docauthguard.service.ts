import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocautService } from './docaut.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate{

  constructor(private docauthService:DocautService,private router:Router) { }


  canActivate() {

    if(this.docauthService.isuserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['doclogin'])
      return false;
    }
      
  }
}
