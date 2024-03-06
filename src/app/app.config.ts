import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, CollapseModule.forRoot()),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
