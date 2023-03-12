import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
  catchError,
  finalize,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

import { loadUser, loadUserFail, loadUserSuccess } from './user.actions';
import { AuthService } from '../../services/auth.service';
import { LoggedUserI } from '../../models/user';
import { Router } from '@angular/router';
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private router: Router,
  ) {}
  loadUser$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUser),
      switchMap((action: ReturnType<typeof loadUser>) =>
        this._authService.login(action.email, action.password).pipe(
          tap((user: LoggedUserI) =>
            localStorage.setItem('X-Token', user.token),
          ),
          map((user: LoggedUserI) => loadUserSuccess({ user })),
          catchError((err) => of(loadUserFail({ error: err }))),
          finalize(() => this.router.navigateByUrl('dashboard')),
        ),
      ),
    );
  });
}
