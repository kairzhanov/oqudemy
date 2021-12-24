import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { courses } from './../data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(courses);
  }

  getCourse(courseId: number): Observable<Course> {
    const course = courses.filter(c => c.id === courseId);
    if (course.length > 0) {
      return of(course[0]);
    }
    return empty();
  }
}
