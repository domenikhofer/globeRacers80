import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  topUsers;

  constructor(private UserDataService: UserDataService) {
    this.UserDataService = UserDataService;
  }

  async ngOnInit() {
    this.topUsers = await this.UserDataService.getTopUsers();
  }
}


