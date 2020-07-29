import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const matModList = [
  MatCardModule,
  MatButtonModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: matModList,
  exports: matModList
})
export class MaterialModule { }
