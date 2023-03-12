import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { LoggedUserI } from '../models/user';
import { apiUrl } from '../../../environment/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  login(email: string, password: string): Observable<LoggedUserI> {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http.post<LoggedUserI>(`${apiUrl}/login`, body).pipe(
      catchError((e) => {
        this.snackbar.open(`Wrong password or email`, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        return throwError(e);
      }),
    );
  }
}
