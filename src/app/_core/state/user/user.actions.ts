import { createAction, props } from '@ngrx/store';

import { LoggedUserI } from '../../../shared/models/user';

export const loadUser = createAction(
  '[User] Load User',
  props<{ email: string; password: string }>(),
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: LoggedUserI }>(),
);

export const loadUserFail = createAction(
  '[User] Load User Fail',
  props<{ error: string }>(),
);
