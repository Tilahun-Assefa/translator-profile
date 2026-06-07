import { DatePipe } from '@angular/common';
import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/_interfaces/job';

@Component({
  selector: 'app-job-card',
  imports: [DatePipe],
  templateUrl: "job-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["job-card.component.css"]
})
export class JobCardComponent {
  readonly job = input.required<Job>();
  readonly index = input.required<Number>();

  private router = inject(Router);

  public redirectToUpdatePage = (id?: string |null) => {
    const updateUrl: string = `/update-job/${id}`;
    this.router.navigate([updateUrl]);
  }
}
