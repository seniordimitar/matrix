import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatrixCardComponent} from './components/matrix-card/matrix-card.component';
import {MaterialModule} from './material/material.module';
import {EllipsisPipe} from './pipes/ellipsis.pipe';
import {MatrixDialogComponent} from './components/matrix-dialog/matrix-dialog.component';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';

const sharedComponents = [MatrixCardComponent, EllipsisPipe, MatrixDialogComponent, ConfirmationDialogComponent];

@NgModule({
  declarations: sharedComponents,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [MaterialModule, ...sharedComponents, CommonModule],
  entryComponents: [MatrixDialogComponent, ConfirmationDialogComponent]
})
export class SharedModule {
}
