import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  constructor() { }

  userData = [
    {
    user: 'user1',
    data : {
      clicks : 0,
      distance : 0,
      achievements : [],
      upgrades : []
    }
  },
    {
      user: 'user2',
      data : {
        clicks : 0,
        distance : 0,
        achievements : [],
        upgrades : []
      }
    }
  ];

  getUserData(user: string) {
   const userData = this.userData.filter(x => x.user === user);
   return userData[0].data;
  }
  addClicks(user: string, clicks: number) {
    this.userData.filter(x => x.user === user)[0].data.clicks += 1;
    return this.getUserData(user).clicks;
  }
  addAchievement(user: string, id: number) {
    this.userData.filter(x => x.user === user)[0].data.achievements.push(id);
  }

}
