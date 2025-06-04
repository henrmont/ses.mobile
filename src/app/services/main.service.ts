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
export class MainService {

  constructor(
    private http: HttpClient,
  ) { }

  checkModuleStatus(url: any): Observable<any> {
    return this.http.get<any>(url)
  }

  changeModuleUser(id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/user/change/module/user/${id}`, {headers: requestOptions})
  }

  getUserModule(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/module/get/user/module/${id}`, {headers: requestOptions})
  }

  getUserModules(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/module/get/user/modules`, {headers: requestOptions})
  }

  getChats(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/chats`, {headers: requestOptions})
  }

  getChat(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/chat/${id}`, {headers: requestOptions})
  }

  registerMessage(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/chat/register/message`, data, {headers: requestOptions})
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/users`, {headers: requestOptions})
  }

  getUserChat(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/user/chat/${id}`, {headers: requestOptions})
  }

  getNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/get/notifications`, {headers: requestOptions})
  }

  deleteNotification(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/notification/delete/notification/${id}`, {headers: requestOptions})
  }

  changeInfo(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/profile/change/info`, data, {headers: requestOptions})
  }

  changePicture(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/profile/change/picture`, data, {headers: requestOptions})
  }

  getArticles() {
    return this.http.get<any>(`${environment.apiUrl}/article/get/articles`, {headers: requestOptions})
  }

}
