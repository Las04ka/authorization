import { createReducer, createSelector, on } from '@ngrx/store';

import { AppState } from '../state';
import { LoggedUserI } from '../../../shared/models/user';
import { loadUserFail, loadUserSuccess } from './user.actions';

export interface UserState {
  user: LoggedUserI;
  error: string | null;
}

const initialState: UserState = {
  user: {
    first_name: '',
    last_name: '',
    role: '',
    token: '',
  },
  error: null,
};

export const UserReducer = createReducer(
  initialState,
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(loadUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
);

export const userState = (state: AppState) => state.user;
export const userSelector = createSelector(userState, (state) => state.user);
