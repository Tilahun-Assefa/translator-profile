import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css']
})
export class TopBarComponent {
  navbarEl= document.querySelector(".navbar");
  bottomContainerEl= document.querySelector(".bottom-container");
  
  
}
