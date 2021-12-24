import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'projects/oqudemy/src/app/core/services/notes.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-lesson-notes',
  templateUrl: './lesson-notes.component.html',
  styleUrls: ['./lesson-notes.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
})
export class LessonNotesComponent implements OnInit {

  noteForm: FormGroup = this.fb.group({
    note: ['', Validators.required]
  });

  lessonId!: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private noteService: NotesService) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['lessonId']) {
        this.lessonId = Number(params['lessonId']);
        console.log(this.lessonId);
      }
    });
  }

  get note() {
    return this.noteForm.get('note')
  }

  get noteList() {
    return this.noteService.notes;
  }

  deleteNote(noteId: number) {
    this.noteService.deleteNote(noteId);
  }

  submit() {
    if (!this.noteForm.valid) {
      return;
    }
    this.noteService.addNote(this.note?.value, this.lessonId);
    this.noteForm.reset();
  }

}
