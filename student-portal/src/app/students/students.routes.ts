import { Routes } from '@angular/router';

export const STUDENTS_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },                 // /students → /students/list
  { path: 'list', loadComponent: () => import('./students-list/students-list.component').then(m => m.StudentsListComponent) },
  { path: 'details/:id', loadComponent: () => import('./student-details/student-details.component').then(m => m.StudentDetailsComponent) },
  // Bonus route
  { path: ':id/courses', loadComponent: () => import('./student-courses/student-courses.component').then(m => m.StudentCoursesComponent) },
];
