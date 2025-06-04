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
export class SisppiService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/user/get/users`, {headers: requestOptions})
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/user/get/user/${id}`, {headers: requestOptions})
  }

  changeValidUser(id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiSisppiUrl}/user/change/valid/user/${id}`, {headers: requestOptions})
  }

  changeInfoUser(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiSisppiUrl}/user/change/info/user`, data, {headers: requestOptions})
  }

  createModuleUser(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user/create/module/user/sisppi`, data, {headers: requestOptions})
  }

  getCounties(): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/county/get/counties`, {headers: requestOptions})
  }

  getCompetences(): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/sigtap/get/competences`, {headers: requestOptions})
  }

  getProcedures(competence: any, chunk: number): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/sigtap/get/procedures/${competence}/${chunk}`, {headers: requestOptions})
  }

  getExerciseYears(): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/exercise/year/get/exercise/years`, {headers: requestOptions})
  }

  createExerciseYear(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiSisppiUrl}/exercise/year/create/exercise/year`, data, {headers: requestOptions})
  }
}
