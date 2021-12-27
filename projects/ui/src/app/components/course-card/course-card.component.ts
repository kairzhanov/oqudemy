import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/oqudemy/src/app/core/models/course.model';
import { CourseService } from 'projects/oqudemy/src/app/core/services/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() isDashboard = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  enroll(courseId: number) {
    this.courseService.subscribeToCourse(courseId);
  }
}
