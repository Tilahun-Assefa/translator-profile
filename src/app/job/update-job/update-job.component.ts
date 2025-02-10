import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Job } from 'src/app/_interfaces/job';
import { JobResponse, JobService } from '../job.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JobUpdateForm } from 'src/app/_interfaces/form/job-update-form';

@Component({
  selector: 'app-add-job',
  imports: [ReactiveFormsModule],
  templateUrl: 'update-job.component.html',
  styleUrls: ['update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  fb = inject(FormBuilder);
  jobService = inject(JobService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  //Job form
  updateJobForm!: FormGroup<JobUpdateForm>;

  //job id to edit
  id: string | null | undefined;
  editing: boolean = false;
  errorMessage: string = '';

  constructor() {
    this.route.params.subscribe(params => {
      this.editing = params["mode"] == "edit";
      this.id = params["id"];
    })
  }
  ngOnInit(): void {
    this.updateJobForm = this.fb.group<JobUpdateForm>({
      id: new FormControl('', Validators.required),
      slottingDate: new FormControl(new Date(), Validators.required),
      partNumber: new FormControl('', Validators.required),
      quantity: new FormControl(1, Validators.required),
      startTime: new FormControl(new Date(), Validators.required),
      finishTime: new FormControl(new Date(), Validators.required),
      packCode: new FormControl(''),
      packQty: new FormControl(1)
    });
    this.getJobById(this.id);
  }

  private getJobById = (id: string | null | undefined) => {
    const apiUrl: string = `api/Job/${id}`;
    this.jobService.getOneJob(apiUrl)
      .subscribe({
        next: (job: any) => {
          this.updateJobForm.patchValue(job.data);
        },
        error: (err: HttpErrorResponse) => err
      })
  }

  validateControl = (controlName: string) => {
    if (this.updateJobForm?.get(controlName)?.invalid && this.updateJobForm?.get(controlName)?.touched)
      return true;

    return false;
  }

  hasError = (controlName: string, errorName: string) => {
    if (this.updateJobForm?.get(controlName)?.hasError(errorName)) {
      return true;
    }
    return false;
  }

  onSubmit(): void {
    // Process checkout data here
    if (this.updateJobForm?.valid) {
      const updatedJob: Job = {
        id: this.updateJobForm.value.id,
        slottingDate: this.updateJobForm.value.slottingDate,
        partNumber: this.updateJobForm.value.partNumber,
        quantity: this.updateJobForm.value.quantity,
        startTime: this.updateJobForm.value.startTime,
        finishTime: this.updateJobForm.value.finishTime,
        packCode: this.updateJobForm.value.packCode,
        packQty: this.updateJobForm.value.packQty ?? 1,
      }
      const apiUrl = 'api/job';
      this.jobService.updateJob(apiUrl, updatedJob);
    }
    this.updateJobForm.reset();
    //go back to job list view
    this.returnList();
  }

  returnList() {
    this.router.navigate(['/jobs']);
  }
}
