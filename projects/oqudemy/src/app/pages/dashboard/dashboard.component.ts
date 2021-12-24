import { Component, OnInit } from '@angular/core';
import { Course } from '../../core/models/course.model';
import { courses } from './../../core/data'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myCourses: Course[] = courses.filter(c => c.enrolled === true);
  recommendedCourses: Course[] = courses.filter(c => c.enrolled === false);

  constructor() { }

  ngOnInit(): void {
  }

}
