import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { _CoreModule } from './_core/_core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    _CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
