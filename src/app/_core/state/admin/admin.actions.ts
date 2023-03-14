import { createAction, props } from '@ngrx/store';
import { UserI } from '../../../shared/models/user';

export const loadUsers = createAction('[Admin] Load Users');

export const loadUsersSuccess = createAction(
  '[Admin] Load Users Success',
  props<{ users: UserI[] }>(),
);

export const loadUsersFail = createAction(
  '[Admin] Load Users Fail',
  props<{ error: string }>(),
);
