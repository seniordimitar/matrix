import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotesBoardComponent} from './notes-board.component';

const routes: Routes = [
  {path: '', component: NotesBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesBoardRoutingModule { }
