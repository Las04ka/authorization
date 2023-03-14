import { AssessmentI } from '../../../shared/models/assessment';
import { createReducer, createSelector, on } from '@ngrx/store';
import {
  loadAssessmentsFail,
  loadAssessmentsSuccess,
} from './assessments.actions';
import { AppState } from '../state';

export interface AssessmentsState {
  assessments: AssessmentI[];
  error: string | null;
}

const initialState: AssessmentsState = {
  assessments: [],
  error: null,
};

export const AssessmentsReducer = createReducer(
  initialState,
  on(loadAssessmentsSuccess, (state, { assessments }) => ({
    ...state,
    assessments: assessments,
  })),
  on(loadAssessmentsFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
);
export const assessmentsState = (state: AppState) => state.assessments;
export const assessmentsSelector = createSelector(
  assessmentsState,
  (state) => state.assessments,
);
