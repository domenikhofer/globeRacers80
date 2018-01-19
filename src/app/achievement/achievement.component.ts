import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AchievementService} from '../services/achievement.service';
import {UserDataService} from '../services/user-data.service';
import * as anime from 'animejs';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})

export class AchievementComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() distance;
  @Input() userData;
  @Input() user;
  @Input() distanceToAch;
  AchievementService;
  UserDataService;
  userAchievements;
  allAchievements;

  constructor(AchievementService: AchievementService, UserDataService: UserDataService) {
    this.AchievementService = AchievementService;
    this.UserDataService = UserDataService;
  }

  async ngOnInit() {
    this.allAchievements = await this.AchievementService.getAllAchievements();
    await this.displayAchievements();
  }

  async ngOnChanges(changes: any) {
    if (changes.clickCount && changes.clickCount.firstChange === false) {
      const clickCount = changes.clickCount.currentValue;
      const achievements = this.allAchievements.filter(
        x => x.unit === 'c' && x.count === clickCount
      );
      if (achievements.length === 1) {
        this.newAchievementAnimation();
        await this.UserDataService.addAchievement(this.userData._id, achievements[0].id);
       await this.displayAchievements();
      }
    }
    if (changes.distance && changes.distance.firstChange === false) {
      const distance = changes.distance.currentValue;
      const userAchievements = this.userData.data.achievements;
      const achievements = this.allAchievements.filter(
        x => x.unit === 'd' && x.count <= distance && userAchievements.indexOf(x.id) === -1
      );
      if (achievements.length === 1) {
        this.newAchievementAnimation();
        await this.UserDataService.addAchievement(this.userData._id, achievements[0].id);
        await this.displayAchievements();
      }
    }
    await this.displayAchievements();
  }

  async displayAchievements() {
    const userData = await this.UserDataService.getUserByUsername(this.user);
    if (this.allAchievements) {
      this.userAchievements =
        userData.data.achievements.map(
          x => this.allAchievements.find(
            y => y.id === x).title
        );
    }
  }

  newAchievementAnimation() {
    anime({
      targets: '.achievementCover',
      opacity: [
        {value: 1, duration: 1000},
        {value: 1, duration: 2000},
        {value: 0, duration: 1000}
        ],
      easing: 'easeInOutQuart',
      duration: 5000,
    });
    anime({
      targets: '.achievementsPopup img',
      scale: [
        {value: 0, duration: 0},
        {value: 1, duration: 1000},
        {value: 1.1, duration: 2000},
        {value: 0, duration: 1000}
      ],
      rotate: [
        {value: '-=90deg', duration: 0},
        {value: '+=90deg', duration: 1000}
      ],
      easing: 'easeInOutQuart',
      duration: 5000,
    });
  }
}
