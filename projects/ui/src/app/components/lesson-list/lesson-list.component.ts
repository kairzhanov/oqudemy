import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'projects/oqudemy/src/app/core/models/lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  @Input() lessons: Lesson[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
