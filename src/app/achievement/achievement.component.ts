import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AchievementService} from '../achievement.service';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() userData;
  @Input() user;
  AchievementService;
  UserDataService;
  userAchievements;

  constructor(AchievementService: AchievementService, UserDataService: UserDataService) {
    this.AchievementService = AchievementService.getAllAchievements();
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.clickCount) {
      const clickCount = changes.clickCount.currentValue;
      const achievements = this.AchievementService.filter(
        x => x.unit === 'c' && x.count === clickCount
      );
      if (achievements.length === 1) {
        this.UserDataService.addAchievement(this.user, achievements[0].id);
        this.userAchievements =
          this.userData.achievements.map(
            x => this.AchievementService.find(
              y => y.id === x).title
          );
      }
    }
  }

}
