import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AchievementService} from '../achievement.service';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() distance;
  userData;
  AchievementService;
  UserDataService;
  userAchievements;

  constructor(AchievementService: AchievementService, UserDataService: UserDataService) {
    this.AchievementService = AchievementService.getAllAchievements();
    this.UserDataService = UserDataService;
    this.userData = this.UserDataService.getUserData();
  }

  ngOnInit() {
    this.displayAchievements();
  }

  ngOnChanges(changes: any) {
    if (changes.clickCount) {
      const clickCount = changes.clickCount.currentValue;
      const achievements = this.AchievementService.filter(
        x => x.unit === 'c' && x.count === clickCount
      );
      if (achievements.length === 1) {
        this.UserDataService.addAchievement(achievements[0].id);
       this.displayAchievements();
      }
    }
    if (changes.distance) {
      const distance = changes.distance.currentValue;
      const userData = this.UserDataService.getUserData();
      const userAchievements = userData.achievements;
      const achievements = this.AchievementService.filter(
        x => x.unit === 'd' && x.count <= distance && userAchievements.indexOf(x.id) === -1
      );
      if (achievements.length === 1) {
        this.UserDataService.addAchievement(achievements[0].id);
        this.displayAchievements();
      }
    }
  }

  displayAchievements() {
    this.userAchievements =
      this.userData.achievements.map(
        x => this.AchievementService.find(
          y => y.id === x).title
      );
  }

}
