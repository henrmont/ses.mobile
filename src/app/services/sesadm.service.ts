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
export class SesadmService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/get/users`, {headers: requestOptions})
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/get/user/${id}`, {headers: requestOptions})
  }

  changeValidUser(id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/user/change/valid/user/${id}`, {headers: requestOptions})
  }

  changeInfoUser(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/user/change/info/user`, data, {headers: requestOptions})
  }

  getModules(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/module/get/modules`, {headers: requestOptions})
  }

  changeUserModule(module_id: any, user_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/module/change/user/module/${module_id}/${user_id}`, {headers: requestOptions})
  }

  getRoles(module: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/role/get/roles/${module}`, {headers: requestOptions})
  }

  createRole(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/role/create/role`, data, {headers: requestOptions})
  }

  updateRole(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/update/role`, data, {headers: requestOptions})
  }

  deleteRole(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/role/delete/role/${id}`, {headers: requestOptions})
  }

  getPermissions(module: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/role/get/permissions/${module}`, {headers: requestOptions})
  }

  changePermissionToRole(permission_id: any, role_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/change/permission/to/role/${permission_id}/${role_id}`, {headers: requestOptions})
  }

  changeRoleToUser(role_id: any, user_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/change/role/to/user/${role_id}/${user_id}`, {headers: requestOptions})
  }

  getCounties(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/county/get/counties`, {headers: requestOptions})
  }

}
