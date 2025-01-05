import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
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
}
