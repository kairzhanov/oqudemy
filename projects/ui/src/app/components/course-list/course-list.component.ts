import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/oqudemy/src/app/core/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Input() isDashboard = false;

  constructor() { }

  ngOnInit(): void {
  }

}
