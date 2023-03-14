import { createReducer, createSelector, on } from '@ngrx/store';

import { UserI } from '../../../shared/models/user';
import { loadUsersFail, loadUsersSuccess } from './admin.actions';
import { AppState } from '../state';

export interface AdminState {
  users: UserI[];
  error: string | null;
}

const initialState: AdminState = {
  users: [],
  error: null,
};

export const AdminReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
  })),
  on(loadUsersFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
);
export const adminState = (state: AppState) => state.admin;
export const usersSelector = createSelector(adminState, (state) => state.users);
