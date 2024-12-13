import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../_interfaces/testimonial';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  public testimonial: Testimonial | undefined;
  constructor() { }
  ngOnInit(): void {
  }
}
