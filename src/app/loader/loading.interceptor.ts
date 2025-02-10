import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { SILENT_LOAD_CONTEXT } from './silent-load.context';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  if (req.context.get(SILENT_LOAD_CONTEXT)) {
    return next(req);
  }

  loadingService.start();
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        loadingService.stop();
      }
    }),
    catchError((err) => {
      loadingService.stop();
      return throwError(() => err);
    }),
  );
};
