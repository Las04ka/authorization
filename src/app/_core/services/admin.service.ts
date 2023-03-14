import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '../../../environment/environment';
import { UserI } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${apiUrl}/users`);
  }
}
