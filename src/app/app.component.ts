import { Component } from '@angular/core';
import {UserDataService} from './user-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks;
  userData;
  UserDataService;
  user = 'user1';

  constructor(UserDataService: UserDataService) {
    this.UserDataService = UserDataService;
    this.userData = this.UserDataService.getUserData(this.user);
  }

  onCarClicked() {
    this.clicks = this.UserDataService.addClicks(this.user, 1);
  }
}
