import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, ResourceRef, Signal } from '@angular/core';
import { Job } from '../_interfaces/job';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  http = inject(HttpClient);

  errorMessage: string = '';
  urlAddress: string = environment.urlAddress;

  jobResource: ResourceRef<Job[]> = rxResource({
    loader: () => this.http.get<JobResponse>(this.urlAddress + "/api/Job/GetAll").pipe(
      map(jr => jr.data)
    )
  });
  jobs: Signal<Job[]> = computed(() => this.jobResource.value() ?? [] as Job[]);

  // updatedJobs: WritableSignal<Job[]> = signal<Job[]>([]);

  public find = (query: string, qType: string) => {
    const selectedJobs = computed(() => this.jobs().filter(j => !query || j.partNumber?.includes(query)));
    return selectedJobs;
  }
  // public getJobs = (route: string): Observable<Job[]> => {
  //   return this.http.get<Job[]>(this.createCompleteRoute(route, this.urlAddress));
  // }

  public getOneJob = (route: string): Observable<JobResponse> => {
    return this.http.get<JobResponse>(this.createCompleteRoute(route, this.urlAddress));
  }

  public createJob = (route: string, job: Job): void => {
    this.http.post<JobResponse>(this.createCompleteRoute(route, this.urlAddress), job, this.generateHeaders()).pipe(
      map(res => res.data)
    ).subscribe(
      {
        next: (res: any) => {
          // this.updatedJobs.set(res.data);
          this.jobs = computed(() => res ?? [] as Job[]);
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
        }
      });
  }

  public updateJob = (route: string, job: Job): Observable<any> => {
    return this.http.put(this.createCompleteRoute(route, this.urlAddress), job, this.generateHeaders());
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
}

export interface JobResponse {
  success: boolean;
  message: string;
  data: Job[];
}