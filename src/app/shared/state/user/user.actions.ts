import { createAction, props } from '@ngrx/store';

import { LoggedUserI } from '../../models/user';

export const loadUser = createAction(
  '[Cats] Load User',
  props<{ email: string; password: string }>(),
);

export const loadUserSuccess = createAction(
  '[Cats] Load User Success',
  props<{ user: LoggedUserI }>(),
);

export const loadUserFail = createAction(
  '[User] Load User Fail',
  props<{ error: string }>(),
);
