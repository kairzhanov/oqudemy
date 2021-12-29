import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { switchMap, zip } from 'rxjs/operators'
import { Course } from '../../../core/models/course.model';
import { Lesson } from '../../../core/models/lesson.model';
import { CourseService } from '../../../core/services/course.service';
import { LessonService } from '../../../core/services/lesson.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId: number = 0;
  course!: Course;
  lessons: Lesson[] = [];

  constructor(private route: ActivatedRoute, private courseService: CourseService, 
    private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      if (params['courseId']) {
        this.courseId = Number(params['courseId']);
        return this.courseService.getCourse(this.courseId);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.course = result;
        this.lessonService.getLessons(this.courseId).subscribe(res => {
          if (res !== null) {
            this.lessons = res;
          }
        })
      }
    });
  }

  get totalDuration() {
    let sum = 0;
    this.lessons.forEach(les => sum += les.length);

    return sum;
  }

}
