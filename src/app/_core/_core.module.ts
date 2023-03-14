import { NgModule, isDevMode } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { UserReducer } from './state/user/user.reducer';
import { metaReducers } from './state/hydration.reducer';
import { UserEffects } from './state/user/user.effects';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './services/token.interceptor';
import { AdminService } from './services/admin.service';
import { AssessmentService } from './services/assessment.service';
import { AuthService } from './services/auth.service';
import { AssessmentsReducer } from './state/assessments/assessments.reducer';
import { AssessmentsEffects } from './state/assessments/assessments.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      { user: UserReducer, assessments: AssessmentsReducer },
      { metaReducers },
    ),
    EffectsModule.forRoot([UserEffects, AssessmentsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    AdminGuard,
    AuthGuard,
    AdminService,
    AuthService,
    AssessmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class _CoreModule {}
