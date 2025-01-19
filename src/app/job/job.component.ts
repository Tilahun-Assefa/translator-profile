import { Component, computed, effect, inject, signal, Signal, WritableSignal } from '@angular/core';
import { JobService } from './job.service';
import { Job } from '../_interfaces/job';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-job',
  imports: [ReactiveFormsModule, JobCardComponent],
  templateUrl: 'job.component.html',
  styleUrls: ["job.component.css"]
})
export class JobComponent {
  private jobService = inject(JobService);
  router = inject(Router);

  queryCtl: FormControl = new FormControl('');
  typeCtl: FormControl = new FormControl('');
  query: WritableSignal<string> = signal('');
  type: WritableSignal<string> = signal('all');

  filteredJobs: WritableSignal<Job[]> = signal<Job[]>([]);
  isLoading = this.jobService.isLoading;
  loadingErrorMessage = this.jobService.loadingErrorMessage;

  jobsCount = computed(() => `Jobs found ${this.filteredJobs().length}`);
  jobSearchParameters = computed(() => `Query ${this.query()} with type ${this.type()}`);

  now = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });
  curTime = computed(() => this.now()?.toLocaleTimeString());
  
  constructor() {
    effect(() => {
      const jobs: Signal<Job[]> = this.jobService.find(this.query(), this.type())
      this.filteredJobs.set(jobs());
    })
  }

  async search() {
    this.query.update(q => q = this.queryCtl.value);
    this.type.update(t=>t=this.typeCtl.value);
    const jobs: Signal<Job[]> = await this.jobService.find(this.query(), this.type())
    this.filteredJobs.update((fj) => fj = jobs());
  }

  createJob() {
    this.router.navigate(['/add-job']);
  }
}
