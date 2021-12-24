import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { Lesson } from '../models/lesson.model';
import { lessons } from './../data';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(courseId: number): Observable<Lesson[]> {
    return of(lessons.filter(l => l.courseId === courseId));
  }

  getLesson(lessonId: number): Observable<Lesson> {
    const lesson = lessons.filter(l => l.lessonId === lessonId);
    if (lesson.length > 0) {
      return of(lesson[0]);
    }
    return empty();
  }
}
