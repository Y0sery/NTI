import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [NgFor],
  template: `
    <h3>Courses for Student ID: {{ studentId }}</h3>
    <ul>
      <li *ngFor="let c of courses">{{ c }}</li>
    </ul>
  `
})
export class StudentCoursesComponent {
  studentId = Number(this.route.snapshot.paramMap.get('id'));
  courses = ['Math 101', 'Physics 201', 'Programming 301'];

  constructor(private route: ActivatedRoute) {}
}
