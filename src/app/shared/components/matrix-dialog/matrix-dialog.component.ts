import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {IDialogData} from '../../models/dialog-data';
import {onlyLetters} from '../../consts/consts';

@Component({
  selector: 'app-matrix-dialog',
  templateUrl: './matrix-dialog.component.html',
  styleUrls: ['./matrix-dialog.component.scss']
})
export class MatrixDialogComponent implements OnInit {
  public modalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {
  }

  get formValues(): boolean {
    return this.modalForm.value;
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.modalForm = this.formBuilder.group({
      id: this.data.value.id,
      authorName: this.data.value.authorName,
      date: this.data.value.date,
      content: [this.data.value.content, Validators.compose([Validators.required])],
    });

    if (this.data.isNewNote) {
      this.modalForm.controls.authorName.setValidators([Validators.required, Validators.pattern(onlyLetters)]);
    } else {
      this.modalForm.controls.authorName.clearValidators();
    }
  }
}
