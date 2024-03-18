import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
    importProvidersFrom(BrowserModule, CollapseModule.forRoot()),DatePipe,
    provideRouter(routes),
    provideHttpClient(),
  ]
};


