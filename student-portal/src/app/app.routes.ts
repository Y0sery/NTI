import { Routes } from '@angular/router';
import { MainLayoutComponent } from 'student-portal\src\layout\main-layout\main-layout.component.ts';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.routes').then(m => m.STUDENTS_ROUTES)
      },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
