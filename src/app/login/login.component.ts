import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginform', [
      transition('void => *', [
        style({transform: 'translateY(100%)' }),
        animate('1s')
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  showForm = false;

  constructor(
    private router: Router,
    private userDataService: UserDataService) { }

  ngOnInit() {
    this.showForm = true;
  }

  login() {
    const username = this.model['username'];
    const password = this.model['password'];
    console.log(this.model);
    this.loading = true;

    if (username === 'admin' && password === 'admin') {
      this.userDataService.setUserLoggedIn();
      this.router.navigate(['/game']);
      localStorage.setItem('currentUser', JSON.stringify(this.model));
    } else {
      alert('username not found');
    }
  }
}
