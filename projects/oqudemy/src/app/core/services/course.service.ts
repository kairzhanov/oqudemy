import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { courses } from './../data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesSubject!: BehaviorSubject<Course[]>;
  courses: Course[] = [];

  constructor() {
    this.courses = courses;
    this.coursesSubject = new BehaviorSubject(this.courses);
  }

  getCourses(): Observable<Course[]> {
    return this.coursesSubject;
  }

  getCourse(courseId: number): Observable<Course> {
    const course = this.courses.filter(c => c.id === courseId);
    if (course.length > 0) {
      return of(course[0]);
    }
    return empty();
  }

  subscribeToCourse(courseId: number) {
    let course = this.courses.find(c => c.id === courseId);
    course!.enrolled = true;
    this.coursesSubject.next(this.courses);
  }
}
