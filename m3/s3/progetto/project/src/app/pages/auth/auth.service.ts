import { AccessData } from './interfaces/access-data';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SignUpData } from './interfaces/sign-up-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, map, tap } from 'rxjs';
import { LoginData } from './interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;

  private authSubject = new BehaviorSubject<null | AccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));

  authLogoutTimer:any;

  constructor(private http:HttpClient, private router:Router) {
    this.restoreUser();
  }

  login(data:LoginData) {
    return this.http.post<AccessData>(this.apiUrl + '/login', data).pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/dashboard']);

      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    }))
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate:Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs)
  }

  signUp(data:SignUpData) {
    return this.http.post<AccessData>(this.apiUrl + '/register', data);
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if(!userJson) {
      return;
    }
    const user:AccessData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
    this.authSubject.next(user);
  }

  getAllUser(apiUrl:string) {
    return this.http.get(apiUrl)
  }
}
