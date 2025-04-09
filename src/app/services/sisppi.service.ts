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

  welcome(): Observable<any> {
    return this.http.get<any>(`${environment.apiSisppiUrl}/welcome`, {headers: requestOptions})
  }
}
