import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Lesson } from '../../../core/models/lesson.model';
import { LessonService } from '../../../core/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessonId: number = 0;
  lesson!: Lesson;
  lessons: Lesson[] = [];
  videoLink: any;

  constructor(private route: ActivatedRoute, 
    private lessonService: LessonService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      if (params['lessonId']) {
        this.lessonId = Number(params['lessonId']);
        return this.lessonService.getLesson(this.lessonId);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.lesson = result;
        this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.lesson.videoUrl)
        this.lessonService.getLessons(this.lesson.courseId).subscribe(res => {
          if (res !== null) {
            this.lessons = res;
          }
        })
      }
    });
  }

  videoURL(): string {
    return '';
  }
}

