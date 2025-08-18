import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInspectorComponent } from './student-inspector.component';

describe('StudentInspectorComponent', () => {
  let component: StudentInspectorComponent;
  let fixture: ComponentFixture<StudentInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInspectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
