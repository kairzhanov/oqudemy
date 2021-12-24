import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { courses } from './../../../core/data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: Course[] = courses;

  constructor() { }

  ngOnInit(): void {
  }

}
