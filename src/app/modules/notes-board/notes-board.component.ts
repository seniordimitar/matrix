import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import * as moment from 'moment';

import {INote} from '../../shared/models/note';
import {mockNotes} from '../../shared/mock/mock-notes';
import {MatrixDialogComponent} from '../../shared/components/matrix-dialog/matrix-dialog.component';
import {ConfirmationDialogComponent} from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.scss']
})
export class NotesBoardComponent implements OnInit {
  public notes: INote[];

  constructor(private router: Router,
              public dialog: MatDialog,
  ) {
  }

  public ngOnInit(): void {
    this.getNotes();
  }

  public getNotes(): void {
    if (JSON.parse(sessionStorage.getItem('notes'))) {
      this.notes = JSON.parse(sessionStorage.getItem('notes'));
    } else {
      this.notes = mockNotes;
    }
    this.storeNotes(this.notes);
  }

  public storeNotes(data): void {
    this.notes = this.notes.sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
    sessionStorage.setItem('notes', JSON.stringify(data));
  }

  public logout(): void {
    sessionStorage.setItem('loggedIn', String(false));
    sessionStorage.removeItem('notes');
    this.router.navigate(['/']);
  }

  public openEditDialog(note): void {
    const dialogRef = this.dialog.open(MatrixDialogComponent, {
      width: '600px',
      data: {value: note, title: `A note from ${note.authorName}`, isNewNote: false}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        const editedIndex = this.notes.findIndex(n => n.id === res.id);
        this.notes[editedIndex] = res;
        this.storeNotes(this.notes);
      }
    });
  }

  public openConfirmationDialog(noteId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {title: `Are you sure you want to delete this card?`}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        const index = this.notes.findIndex(n => n.id === noteId);
        this.notes.splice(index, 1);
        this.storeNotes(this.notes);
      }
    });
  }

  public openNewNoteDialog(): void {
    const newNote: INote = {
      date: moment().format('YYYY-MM-DD'),
      id: (this.notes.length + 1).toString(), // it can be uuid
      authorName: '',
      content: ''
    };
    const dialogRef = this.dialog.open(MatrixDialogComponent, {
      width: '600px',
      data: {value: newNote, title: `Add new Note`, isNewNote: true}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res && res.authorName && res.content) {
        this.notes.push(res);
        this.storeNotes(this.notes);
      }
    });
  }

}
