import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('Token');
    if (token) {
      let url: string = state.url;
      return this.checkUserLogin(route, url);
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }


  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }


}
