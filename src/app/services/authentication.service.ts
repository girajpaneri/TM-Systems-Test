import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLogin = false;
    
  constructor() { }

  login(value: string) {
    this.isLogin = true;
    localStorage.setItem('STATE', 'true');
    return of({ success: this.isLogin });
  }

  logout() {
    this.isLogin = false;
    localStorage.setItem('STATE', 'false');
    return of({ success: this.isLogin});
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

}
