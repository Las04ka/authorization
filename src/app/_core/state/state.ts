import { UserState } from './user/user.reducer';
import { AssessmentsState } from './assessments/assessments.reducer';
import { AdminState } from './admin/admin.reducer';

export interface AppState {
  user: UserState;
  assessments: AssessmentsState;
  admin: AdminState;
}
