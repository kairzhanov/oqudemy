import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { courses } from './../../../core/data'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = courses;
  
  constructor() { }

  ngOnInit(): void {
  }

}
