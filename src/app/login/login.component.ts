import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginform', [
      transition('void => *', [
        query('.loginform, h2, .form-group ', [
          style({
            opacity: 0,
            transform: 'translateY(-10px)'
          }),
          stagger(250, [animate('0.5s 0.5s ease-in-out')])
        ])

      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  showForm = false;
  wrongPw = false;
  login_attempts = 3;

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

    if (!userdata) {
      this.login_attempts -= 1;
      alert('Username or Password incorrect ' + this.login_attempts + ' Login Attempts Available');
      if (this.login_attempts === 0) {
        (document.getElementById('js_login-btn') as HTMLButtonElement).disabled = true;
        setTimeout(() => {
          this.login_attempts = 3;
          (document.getElementById('js_login-btn') as HTMLButtonElement).disabled = false;
        }, 900000);
      }
    } else if (await this.userDataService.checkPassword(password, userdata.hash)) {
      this.loading = true;
      this.userDataService.setUserLoggedIn(username);
      this.router.navigate(['/game']);
    } else {
      this.wrongPw = true;
    }
  }
}
