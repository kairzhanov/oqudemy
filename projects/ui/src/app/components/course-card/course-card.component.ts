import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/oqudemy/src/app/core/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() isDashboard = false;

  constructor() { }

  ngOnInit(): void {
  }

}
