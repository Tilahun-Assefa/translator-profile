import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p class="homeText">{{homeText}}</p>
  `,
  styles: `.homeText{ 
    font-size: 35px; 
    color: red; 
    text-align: center; 
    position: relative; 
    top:30px; 
    text-shadow: 2px 2px 2px gray; 
}`
})
export class HomeComponent implements OnInit{
  public homeText: string | undefined;
  constructor(){}
  ngOnInit(): void {
    this.homeText = "WELCOME TO WMkt Translation Service APPLICATION";
  }
}
