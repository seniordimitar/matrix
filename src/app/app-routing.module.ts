import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoardGuard} from './guards/board.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main-board',
    canActivate: [BoardGuard],
    loadChildren: () => import('./modules/notes-board/notes-board.module').then(m => m.NotesBoardModule)
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
