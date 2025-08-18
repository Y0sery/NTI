import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentCardComponent, Student } from '../student-card/student-card.component';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [NgFor, RouterLink, StudentCardComponent],
  template: `
    <h2>Students List</h2>
    <div *ngFor="let s of students">
      <app-student-card [student]="s">
        <!-- ng-content: insert any actions -->
        <button [routerLink]="['/students/details', s.id]">View Details</button>
        <button [routerLink]="['/students', s.id, 'courses']" style="margin-left:8px">
          View Courses
        </button>
      </app-student-card>
    </div>
  `
})
export class StudentsListComponent {
  students: Student[] = [
    { id: 1, name: 'Mahmoud', age: 22, major: 'Computer Science' },
    { id: 2, name: 'Sara',  age: 21, major: 'Biology' },
    { id: 3, name: 'Omar',  age: 23, major: 'Engineering' }
  ];
}
