import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Translator Hub</h1>
    <a routerLink="/cart" class="button fancy-button"><i class="material-icons">shopping_cart</i>Checkout </a>
  `,
  styles: [`
  h1{
    font-size: 36px;
    text-align: center;
  }
  `]
})
export class TopBarComponent {

}
