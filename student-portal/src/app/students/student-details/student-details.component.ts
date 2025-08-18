import {
  Component, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Student } from '../student-card/student-card.component';
import { StudentInspectorComponent } from '../student-inspector/student-inspector.component';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [NgIf, RouterLink, StudentInspectorComponent],
  template: `
    <h2>Student Details</h2>
    <ng-container *ngIf="student">
      <p>ID: {{student.id}}</p>
      <p>Name: {{student.name}}</p>
      <p>Age: {{student.age}}</p>
      <p>Major: {{student.major}}</p>

      <button (click)="changeName()">Change Name</button>
      <button [routerLink]="['/students', student.id, 'courses']" style="margin-left:8px">
        View Courses
      </button>

      <!-- Child shows ngOnChanges when student changes -->
      <app-student-inspector [student]="student"></app-student-inspector>
    </ng-container>

    <p style="margin-top:16px"><a routerLink="/students/list">Back to list</a></p>
  `
})
export class StudentDetailsComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  student!: Student;

  constructor(private route: ActivatedRoute) {}

  // --- Lifecycle logs ---
  ngOnInit() {
    console.log('[StudentDetailsComponent] ngOnInit');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = { id, name: 'Ahmed', age: 22, major: 'Computer Science' };
  }
  ngOnChanges(changes: SimpleChanges) { console.log('[StudentDetailsComponent] ngOnChanges', changes); }
  ngDoCheck() { console.log('[StudentDetailsComponent] ngDoCheck'); }
  ngAfterContentInit() { console.log('[StudentDetailsComponent] ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('[StudentDetailsComponent] ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('[StudentDetailsComponent] ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('[StudentDetailsComponent] ngAfterViewChecked'); }
  ngOnDestroy() { console.log('[StudentDetailsComponent] ngOnDestroy'); }

  changeName() {
    this.student = { ...this.student, name: this.student.name + ' ✨' };
  }
}
