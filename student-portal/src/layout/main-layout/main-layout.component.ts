import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav style="padding:12px; border-bottom:1px solid #ddd">
      <a routerLink="/" style="margin-right:12px">Home</a>
      <a routerLink="/students" style="margin-right:12px">Students</a>
      <a routerLink="/about">About</a>
    </nav>
    <div style="padding:16px">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainLayoutComponent {}
