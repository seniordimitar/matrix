import { NgModule } from '@angular/core';

import {NotesBoardComponent} from './notes-board.component';
import {NotesBoardRoutingModule} from './notes-board-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [NotesBoardComponent],
  imports: [NotesBoardRoutingModule, SharedModule]
})
export class NotesBoardModule { }
