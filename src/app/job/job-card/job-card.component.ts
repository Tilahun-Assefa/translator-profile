import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/_interfaces/job';

@Component({
  selector: 'app-job-card',
  imports: [DatePipe],
  templateUrl: "job-card.component.html",
  styleUrls: ["job-card.component.css"]
})
export class JobCardComponent {
  @Input() job!: Job;
  @Input() index!: Number;

  private router = inject(Router);

  public redirectToUpdatePage = (id?: string |null) => {
    const updateUrl: string = `/update-job/${id}`;
    this.router.navigate([updateUrl]);
  }
}
