import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('registerform', [
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('1s')
      ])
    ])
  ]
})

export class RegistrationComponent implements OnInit {
  model: any = {};
  loading = false;
  showForm = false;
  usernameExists = false;

  constructor(private router: Router,
              private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.showForm = true;
  }

  async register() {

    const userdata = await this.userDataService.getUserByUsername(this.model.username);

    if (userdata === null) {
      const hash = await this.userDataService.getPasswordHash(this.model.password);
      await this.userDataService.addUser(this.model.username, hash);
      this.userDataService.setUserLoggedIn(this.model.username);
      console.log(this.userDataService.getUserLoggedIn());
      this.router.navigate(['/game']);
      this.loading = true;
    } else {
      this.usernameExists = true;
    }
  }
}
