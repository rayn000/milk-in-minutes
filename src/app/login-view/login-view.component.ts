import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  password: string = '';
  userName: string = '';

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  login(loginForm: NgForm) {
    if (this.userName === 'admin1' && this.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dairy-products-requests']);

      this._snackBar.open('Login Successful', 'close', {duration: 3000});
      console.log(`name: ${this.userName} pswd: ${this.password}`);
    } else {
      alert('Invalid login credentials !!!');

      console.log(`name: ${this.userName} pswd: ${this.password}`);
      
    }
  }
}