import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Qna } from 'projects/oqudemy/src/app/core/models/qna.model';
import { QnaService } from 'projects/oqudemy/src/app/core/services/qna.service';
import { empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-qna',
  templateUrl: './lesson-qna.component.html',
  styleUrls: ['./lesson-qna.component.scss']
})
export class LessonQnaComponent implements OnInit {

  lessonId!: number;
  questions: Qna[] = []

  constructor(private route: ActivatedRoute, private qnaService: QnaService) { }

  ngOnInit(): void {
    this.route.parent?.params.pipe(switchMap(params => {
      if (params['lessonId']) {
        this.lessonId = Number(params['lessonId']);
        console.log(this.lessonId);
        return this.qnaService.getQuestions(this.lessonId);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.questions = result;
        console.log(this.questions);
      }
    });
  }

}
