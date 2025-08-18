import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Student } from '../student-card/student-card.component';

@Component({
  selector: 'app-student-inspector',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <p><strong>Inspector (child):</strong> sees student = {{ student | json }}</p>
  `
})
export class StudentInspectorComponent implements OnChanges {
  @Input({ required: true }) student!: Student;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[StudentInspectorComponent] ngOnChanges', changes);
  }
}
