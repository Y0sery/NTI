import { Component, Input } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  major: string;
}

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `
    <div style="border:1px solid #ccc; padding:12px; margin:8px 0; border-radius:8px;">
      <h3>{{student.name}} ({{student.age}})</h3>
      <p>Major: {{student.major}}</p>
      <ng-content></ng-content>
    </div>
  `
})
export class StudentCardComponent {
  @Input({ required: true }) student!: Student;
}
