import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, ResourceRef, ResourceStatus, Signal } from '@angular/core';
import { Job } from '../_interfaces/job';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { rxResource } from '@angular/core/rxjs-interop';
import { setErrorMessage } from '../shared/error-message';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  http = inject(HttpClient);
  errorMessage: string = '';
  urlAddress: string = environment.urlAddress;

  private jobResource: ResourceRef<Job[] | undefined> = rxResource({
    loader: () => this.http.get<JobResponse>(this.urlAddress + "/api/Job/GetAll").pipe(
      map(jr => jr.data)
    )
  });
  jobs: Signal<Job[]> = computed(() => this.jobResource.value() ?? [] as Job[]);
  error: Signal<HttpErrorResponse> = computed(() => this.jobResource.error() as HttpErrorResponse);
  loadingErrorMessage = computed(() => setErrorMessage(this.error(), "Job"));
  errorStatus = computed(() => this.error().status)
  isLoading: Signal<boolean> = this.jobResource.isLoading;

  private timerId = 0 as any;

  dataStale = linkedSignal({
    source: this.jobResource.status,
    computation: (status) => {
      if (this.timerId > 0) {
        clearTimeout(this.timerId)
      }
      if (status === ResourceStatus.Resolved) {
        this.timerId = setTimeout(() => {
          this.dataStale.set(true);
          this.timerId = 0;
        }, 300000);
      }
      return false;
    }
  });

  reloadData() {
    this.jobResource.reload();
  }
  // updatedJobs: WritableSignal<Job[]> = signal<Job[]>([]);

  public find = (query: string, qType: string) => {
    const selectedJobs = computed(() => this.jobs().filter(j => !query || j.partNumber?.includes(query)));
    return selectedJobs;
  }


  public getOneJob = (route: string): Observable<JobResponse> => {
    return this.http.get<JobResponse>(this.createCompleteRoute(route, this.urlAddress))
      .pipe(
        map(jr => jr)
      );
  }

  public createJob = (route: string, job: Job): void => {
    this.http.post<JobResponse>(this.createCompleteRoute(route, this.urlAddress), job, this.generateHeaders())
      .pipe(
        map(res => res.data)
      ).subscribe(
        {
          next: (res: any) => {
            this.jobs = computed(() => res ?? [] as Job[]);
          },
          error: (err: HttpErrorResponse) => {
            this.errorMessage = err.message;
          }
        });
  }

  public updateJob = (route: string, job: Job): void => {
    this.http.put<JobResponse>(this.createCompleteRoute(route, this.urlAddress), job, this.generateHeaders())
      .pipe(
        tap(res => console.log(res)),
        map(res => res.data),
        catchError(err => this.handleError(err))
      ).subscribe(
        {
          next: (res: any) => {
            this.jobResource.reload();
          },
          error: (err: HttpErrorResponse) => {
            this.errorMessage = err.message;
          }
        });
  }
  public deleteJob = (route: string): Observable<any> => {
    return this.http.delete(this.createCompleteRoute(route, this.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}

export interface JobResponse {
  success: boolean;
  message: string;
  data: Job[];
}