import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { userSelector } from '../state/user/user.reducer';
import { AppState } from '../state/state';
import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';

@Injectable({
  providedIn: 'root',
})
@AutoUnsubscribe
export class AdminGuard implements CanActivate {
  private role!: string;
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select(userSelector).subscribe((el) => (this.role = el.role));
    if (this.role !== 'Admin') {
      this.router.navigateByUrl('dashboard');
      return false;
    } else return true;
  }
}
