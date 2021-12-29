import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { courses } from './../data';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesSubject!: BehaviorSubject<Course[]>;
  courses: Course[] = [];

  constructor(private loaderService: LoaderService) {
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

  async subscribeToCourse(courseId: number) {
    this.loaderService.isLoading.next(true);
    setTimeout( () =>{
      this.loaderService.isLoading.next(false);
      let course = this.courses.find(c => c.id === courseId);
      course!.enrolled = true;
      this.coursesSubject.next(this.courses);
    }, 3000);
    
  }
  
  
}
