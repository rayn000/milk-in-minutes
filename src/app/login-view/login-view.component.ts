import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  securityCode: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.securityCode === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dairy-products-requests']);
    } else {
      alert('Invalid security code');
    }
  }
}