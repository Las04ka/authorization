import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AdminService } from '../../services/admin.service';
import { loadUsers, loadUsersFail, loadUsersSuccess } from './admin.actions';
import { UserI } from '../../../shared/models/user';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private _adminService: AdminService) {}
  loadUsers$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this._adminService.getUsers().pipe(
          map((users: UserI[]) => loadUsersSuccess({ users })),
          catchError((err) => of(loadUsersFail({ error: err }))),
        ),
      ),
    );
  });
}
