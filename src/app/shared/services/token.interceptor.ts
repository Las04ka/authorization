import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { apiUrl } from '../../../environment/environment';

@Injectable()
export class TokenInterceptor<T> implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    if (request.url == `${apiUrl}/login`) {
      return next.handle(request);
    }

    if (!localStorage.getItem('X-Token')) {
      this.router.navigateByUrl('');
    }

    const copiedRequest = request.clone({
      headers: request.headers.set('X-Token', localStorage.getItem('X-Token')!),
    });

    return next.handle(copiedRequest);
  }
}
