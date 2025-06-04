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

  // Usuários
  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/get/users`, {headers: requestOptions})
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/get/user/${id}`, {headers: requestOptions})
  }

  changeValidUser(module: any, id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/user/change/valid/user/${module}/${id}`, {headers: requestOptions})
  }

  changeInfoUser(module: any, data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/user/change/info/user/${module}`, data, {headers: requestOptions})
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user/create`, data)
  }


  getModules(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/module/get/modules`, {headers: requestOptions})
  }

  changeUserModule(module_id: any, user_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/module/change/user/module/${module_id}/${user_id}`, {headers: requestOptions})
  }


  // Regras
  getRoles(module: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/role/get/roles/${module}`, {headers: requestOptions})
  }

  createRole(module: any, data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/role/create/role/${module}`, data, {headers: requestOptions})
  }

  updateRole(module: any, data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/update/role/${module}`, data, {headers: requestOptions})
  }

  deleteRole(module: any, id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/role/delete/role/${module}/${id}`, {headers: requestOptions})
  }

  getPermissions(module: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/role/get/permissions/${module}`, {headers: requestOptions})
  }

  changePermissionToRole(module: any, permission_id: any, role_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/change/permission/to/role/${module}/${permission_id}/${role_id}`, {headers: requestOptions})
  }

  changeRoleToUser(module: any, role_id: any, user_id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/role/change/role/to/user/${module}/${role_id}/${user_id}`, {headers: requestOptions})
  }

  // Municípios
  getCounties(module: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/county/get/counties/${module}`, {headers: requestOptions})
  }

  process(data: any): Observable<any> {
    const formData = new FormData()
    formData.append('file', data)
    return this.http.post<any>(`${environment.apiUrl}/sigtap/process`, formData, {headers: requestOptions})
  }

  getCompetences(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/sigtap/get/competences`, {headers: requestOptions})
  }

  getProcedures(competence: any, chunk: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/sigtap/get/procedures/${competence}/${chunk}`, {headers: requestOptions})
  }

}
