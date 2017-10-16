import {Injectable} from '@angular/core';

@Injectable()
export class UserDataService {

  constructor() {
  }
  user = 'user1';
  userData = [
    {
      user: 'user1',
      data: {
        clicks: 0,
        distance: 0,
        achievements: [],
        upgrades: []
      }
    },
    {
      user: 'user2',
      data: {
        clicks: 0,
        distance: 0,
        achievements: [],
        upgrades: []
      }
    }
  ];

  getUserData() {
    const userData = this.userData.filter(x => x.user === this.user);
    return userData[0].data;
  }

  addClicks(clicks: number) {
    this.userData.filter(x => x.user === this.user)[0].data.clicks += clicks;
    return this.getUserData().clicks;
  }

  addDistance(distance: number) {
    this.userData.filter(x => x.user === this.user)[0].data.distance += distance;
    return this.getUserData().distance;
  }

  addAchievement(id: number) {
    this.userData.filter(x => x.user === this.user)[0].data.achievements.push(id);
  }

  addUpgrade(id: number) {
    this.userData.filter(x => x.user === this.user)[0].data.upgrades.push(id);
  }

}
