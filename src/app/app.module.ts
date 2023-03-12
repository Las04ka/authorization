import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminPanelModule } from './components/admin-panel/admin-panel.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { LoginModule } from './components/login/login.module';
import { HeaderModule } from './shared/components/header/header.module';
import { metaReducers } from './shared/state/hydration.reducer';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { UserEffects } from './shared/state/user/user.effects';
import { UserReducer } from './shared/state/user/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    LoginModule,
    DashboardModule,
    HeaderModule,
    AdminPanelModule,
    StoreModule.forRoot({ user: UserReducer }, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
