import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginform', [
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('1s')
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  showForm = false;
  wrongPw = false;

  constructor(private router: Router,
              private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.showForm = true;
  }

  async login() {
    const username = this.model['username'];
    const password = this.model['password'];
    const userdata = await this.userDataService.getUserByUsername(username);
    if (await this.userDataService.checkPassword(password, userdata.hash)) {
      this.loading = true;
      this.userDataService.setUserLoggedIn(username);
      this.router.navigate(['/game']);
    } else {
      this.wrongPw = true;
    }
  }
}
