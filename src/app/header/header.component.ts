import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck{

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }
  
  ngDoCheck(): void {
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
  }   

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
