import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private snackBar: MatSnackBar) {
  }

  public get isAuthenticated(): boolean {
    return JSON.parse(sessionStorage.getItem('loggedIn'));
  }

  public login(): void {
    sessionStorage.setItem('loggedIn', String(true));
    this.loadMainBoard();
  }

  public loadMainBoard(): void {
    if (this.isAuthenticated) {
      this.router.navigate(['/main-board']);
    } else {
      this.snackBar.open('You are not authorized to view the board!', '', {duration: 5000});
    }
  }

}
