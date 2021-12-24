import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/oqudemy/src/app/core/models/course.model';

@Component({
  selector: 'app-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.scss']
})
export class MyCourseCardComponent implements OnInit {
  @Input() course!: Course;
  

  constructor() { }

  ngOnInit(): void {
  }

}
