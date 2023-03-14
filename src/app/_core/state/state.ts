import { UserState } from './user/user.reducer';
import { AssessmentsState } from './assessments/assessments.reducer';

export interface AppState {
  user: UserState;
  assessments: AssessmentsState;
}
