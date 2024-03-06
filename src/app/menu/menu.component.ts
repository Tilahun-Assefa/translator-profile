import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "menu.component.html",
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }
}
