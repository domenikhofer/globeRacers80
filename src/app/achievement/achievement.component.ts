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
  @Input() userData;
  AchievementService;
  UserDataService;
  userAchievements;
  allAchievements;

  constructor(AchievementService: AchievementService, UserDataService: UserDataService) {
    this.AchievementService = AchievementService;
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
    this.AchievementService.getAllAchievements().subscribe(data => {
      this.allAchievements = data;
    });
  }

  ngOnChanges(changes: any) {
   if (changes.clickCount && changes.clickCount.firstChange === false) {
      const clickCount = changes.clickCount.currentValue;
      const achievements = this.allAchievements.filter(
        x => x.unit === 'c' && x.count === clickCount
      );
      if (achievements.length === 1) {
        this.UserDataService.addAchievement(this.userData._id, achievements[0].id).subscribe(() => this.displayAchievements());
      }
    }
    if (changes.distance && changes.distance.firstChange === false) {
      const distance = changes.distance.currentValue;
      const userAchievements = this.userData.data.achievements;
      const achievements = this.allAchievements.filter(
        x => x.unit === 'd' && x.count <= distance && userAchievements.indexOf(x.id) === -1
      );
      if (achievements.length === 1) {
        this.UserDataService.addAchievement(this.userData._id, achievements[0].id).subscribe(() => this.displayAchievements());
      }
    }
  }

  displayAchievements() {
    this.UserDataService.getUserData(this.userData._id).subscribe(data => {
      this.userData = data;
      this.userAchievements =
        data.data.achievements.map(
          x => this.allAchievements.find(
            y => y.id === x).title
        );
    });
  }
}
