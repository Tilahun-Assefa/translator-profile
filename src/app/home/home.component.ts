import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p class="homeText">{{homeText}}</p>
  `,
  styles: ``
})
export class HomeComponent implements OnInit{
  public homeText: string | undefined;
  constructor(){}
  ngOnInit(): void {
    this.homeText = "WELCOME TO WMkt Translation Service APPLICATION";
  }
}
