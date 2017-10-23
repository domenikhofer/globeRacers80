import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('registerform', [
      transition('void => *', [
        style({transform: 'translateY(100%)' }),
        animate('1s')
      ])
    ])
  ]
})

export class RegistrationComponent {
  model: any = {};
  loading = false;
  showForm = false;

  constructor(
    private router: Router,
    private userDataService: UserDataService) { }

  ngOnInit() {
    this.showForm = true;
  }

  register() {
    console.log(this.model)
    this.loading = true;
    this.userDataService.addUser(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/game']);
        },
        error => {
          this.loading = false;
        });
  }
}
