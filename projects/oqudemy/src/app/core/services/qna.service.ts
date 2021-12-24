import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Qna } from '../models/qna.model';
import { qnas } from './../data';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  constructor() { }

  public getQuestions(lessonId: number): Observable<Qna[]> {
    return of(qnas.filter(q => q.lessonId === lessonId));
  }
}
