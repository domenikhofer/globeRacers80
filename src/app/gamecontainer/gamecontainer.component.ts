import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserDataService} from '../services/user-data.service';
import {UpgradeService} from '../services/upgrade.service';
import {AchievementService} from '../services/achievement.service';

@Component({
  selector: 'app-gamecontainer',
  templateUrl: './gamecontainer.component.html',
  styleUrls: ['./gamecontainer.component.scss']
})

export class GamecontainerComponent implements OnInit {
  clicks;
  distance;
  userData;
  UserDataService;
  UpgradeService;
  AchievementService;
  allUpgrades;
  allAchievements;
  distanceToAch;
  ms;
  mc;
  user;
  meter;
  country;
  userMenu = false;
  loading = false;

  constructor(UserDataService: UserDataService,
              UpgradeService: UpgradeService,
              AchievementService: AchievementService,
              private router: Router) {
    this.UserDataService = UserDataService;
    this.UpgradeService = UpgradeService;
    this.AchievementService = AchievementService;
  }

  async ngOnInit() {
    this.country = 'switzerland';
    this.loading = true;
    this.user = this.UserDataService.getUserLoggedIn();
    this.userData = await this.UserDataService.getUserByUsername(this.user);
    this.allUpgrades = await this.UpgradeService.getAllUpgrades();
    this.allAchievements = await this.AchievementService.getAllAchievements();

    setInterval(async () => {
        this.ms = this.getMultiplier('ms');
        this.mc = this.getMultiplier('mc');
        await this.UserDataService.addDistance(this.userData._id, this.ms);
        this.userData = await this.UserDataService.getUserByUsername(this.user);
        this.distance = this.userData.data.distance;
        this.loading = false;
    }, 1000);
  }

  async onCarClicked() {
    await this.UserDataService.addClicks(this.userData._id, 1);
    this.mc = this.getMultiplier('mc');
    await this.UserDataService.addDistance(this.userData._id, this.mc);
    this.userData = await this.UserDataService.getUserByUsername(this.user);
    this.clicks = this.userData.data.clicks;
    this.distance = this.userData.data.distance;
  }

  onUpgradeClicked(upgrade) {
    this.getMultiplier(upgrade.upgrade.unit);
    if  (upgrade.upgrade.unit === 'mc') {
      this.mc = this.getMultiplier('mc');
    } else {
      this.ms = this.getMultiplier('ms');
    }
  }

  onDistanceToAchChange() {
    this.distanceToAch = this.getDistancetoNextAchievement();
    (!this.distanceToAch || this.distanceToAch === 1) ? (this.meter = 'meter') : (this.meter = 'meters');
    if (this.distance > 40000) { this.country = 'italy'; }
    if (this.distance > 100000) { this.country = 'tunisia'; }
  }

  getDistancetoNextAchievement() {
    const nextAchievementCount = this.userData.data.achievements.map(x => this.allAchievements.find(y => y.id === x + 1).count);
    const distance = this.userData.data.distance;
    const distancetoAch = (nextAchievementCount[nextAchievementCount.length - 1] - distance);
    return distancetoAch;
  }

  getMultiplier(type: string) {
    const allUserUpgrades = this.userData.data.upgrades.map(x => this.allUpgrades.find(y => y.id === x));
    const typeUpgrades = allUserUpgrades.filter(x => x.upgrade.unit === type);
    let multiplier = (type === 'mc' ? 1 : 0);
    const operators = {
      '*': (a, b) => a * b,
      '+': (a, b) => a + b,
    };

    typeUpgrades.map(x => multiplier = operators[x.upgrade.operator](multiplier, x.upgrade.operand));
    return multiplier;
  }

  logout() {
    this.UserDataService.setUserLoggedOut(this.user);
    this.router.navigate(['/login']);
  }

  async reset() {
    this.userMenu = false;
    if (confirm('Are you sure you want to delete all your progress?')) {
     this.distance = 0;
     await this.UserDataService.resetUser(this.user);
     await this.onCarClicked();
     await this.UserDataService.resetUser(this.user);
     await this.onCarClicked();
    }
  }
}
