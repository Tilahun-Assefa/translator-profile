import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
    selector: 'app-menu',
    imports: [RouterLink, RouterLinkActive, CollapseModule],
    templateUrl: "menu.component.html",
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }
}
