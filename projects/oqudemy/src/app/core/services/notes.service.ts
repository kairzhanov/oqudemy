import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = [];

  constructor() { }

  addNote(text: string, lessonId: number) {
    let note = new Note();
    note.text = text;
    note.lessonId = lessonId;
    note.id = this.notes.length;

    this.notes.push(note);
  }

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(n => n.id !== noteId);
  }
}
