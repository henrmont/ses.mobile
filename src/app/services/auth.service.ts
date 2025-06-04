import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const requestOptions = {
  'Authorization': `Bearer ${window.localStorage.getItem('token')}`
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, data)
  }

  logout() {
    return this.http.get<any>(`${environment.apiUrl}/auth/logout`, {headers: requestOptions})
  }

  me(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/me`, {headers: requestOptions})
  }

  refresh(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/refresh`, {headers: requestOptions})
  }

  sendVerificationCode(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/send/verification/code`, data, {headers: requestOptions})
  }

  checkVerificationCode(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/check/verification/code`, data, {headers: requestOptions})
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/reset/password`, data, {headers: requestOptions})
  }

}
