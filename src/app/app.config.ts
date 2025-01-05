import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DatePipe } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule, BrowserAnimationsModule, CollapseModule.forRoot(), ModalModule.forRoot()),DatePipe,
    provideRouter(routes),
    provideHttpClient(),
  ]
};