import { createAction, props } from '@ngrx/store';
import { AssessmentI } from '../../../shared/models/assessment';

export const loadAssessments = createAction('[Assessments] Load Assessments');

export const loadAssessmentsSuccess = createAction(
  '[Assessments] Load Assessments Success',
  props<{ assessments: AssessmentI[] }>(),
);

export const loadAssessmentsFail = createAction(
  '[Assessments] Load Assessments Fail',
  props<{ error: string }>(),
);
