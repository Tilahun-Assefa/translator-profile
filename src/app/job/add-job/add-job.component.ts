import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Job } from 'src/app/_interfaces/job';
import { JobService } from '../job.service';
import { JobCreateForm } from 'src/app/_interfaces/form/job-create-form';

@Component({
  selector: 'app-add-job',
  imports: [ReactiveFormsModule],
  templateUrl: 'add-job.component.html',
  styleUrls: ['add-job.component.css']
})
export class AddJobComponent implements OnInit {
  fb = inject(FormBuilder);
  jobService = inject(JobService);
  router = inject(Router);
  route = inject(ActivatedRoute);

   PackCodeTVH = ["BG01PB", "TBP03", "TBP06", "TBP09", "BG412PB", "BG418PB", "BG424PB", "BG536PB"];

  addJobForm!: FormGroup<JobCreateForm>;
  errorMessage: string = '';

  ngOnInit(): void {
    this.addJobForm = this.fb.group<JobCreateForm>({
      slottingDate: new FormControl(new Date(), Validators.required),
      partNumber: new FormControl(''),
      quantity: new FormControl(1),
      startTime: new FormControl(new Date(), Validators.required),
      finishTime: new FormControl(new Date(), Validators.required),
      packCode: new FormControl(''),
      packQty: new FormControl(1)
    });
  }

  onSubmit(): void {
    // Process checkout data here
    if (this.addJobForm?.valid) {
      const newJob: Job = {
        slottingDate: this.addJobForm.value.slottingDate,
        partNumber: this.addJobForm.value.partNumber,
        quantity: this.addJobForm.value.quantity,
        startTime: this.addJobForm.value.startTime,
        finishTime: this.addJobForm.value.finishTime,
        packCode: this.addJobForm.value.packCode,
        packQty: this.addJobForm.value.packQty ?? 1,
      }
      const apiUrl = 'api/job';
      this.jobService.createJob(apiUrl, newJob);
    }
    this.addJobForm.reset();
  }

  returnList() {
    this.router.navigate(['/jobs']);
  }
}
