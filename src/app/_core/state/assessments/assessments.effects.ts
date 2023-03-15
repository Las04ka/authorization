import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AssessmentService } from '../../services/assessment.service';
import {
  loadAssessments,
  loadAssessmentsFail,
  loadAssessmentsSuccess,
} from './assessments.actions';
import { AssessmentI } from '../../../shared/models/assessment';

@Injectable()
export class AssessmentsEffects {
  constructor(
    private actions$: Actions,
    private _assessmentService: AssessmentService,
  ) {}
  loadAssessments$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAssessments),
      switchMap(() =>
        this._assessmentService.getAssessments().pipe(
          map((assessments: AssessmentI[]) =>
            loadAssessmentsSuccess({ assessments }),
          ),
          catchError((err) => of(loadAssessmentsFail({ error: err }))),
        ),
      ),
    );
  });
}
