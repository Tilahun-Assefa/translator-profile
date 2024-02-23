import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'dl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent implements OnInit {

  roles: any = ['Admin', 'Author', 'Reader'];
  selectedRole:  FormControl = new FormControl(this.roles[0]);

  constructor() { }

  ngOnInit(): void {
  }

}
