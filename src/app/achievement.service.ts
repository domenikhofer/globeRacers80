import { Injectable } from '@angular/core';

@Injectable()
export class AchievementService {

  constructor() { }

  achievements = [
    {
      id: 0,
      title: 'First Click!',
      img: 'c1.png',
      unit: 'c',
      count: 1
    },
    {
      id: 1,
      title: 'Ten Clicks!',
      img: 'c1.png',
      unit: 'c',
      count: 10
    },
    {
      id: 2,
      title: '100 Meters!',
      img: 'c1.png',
      unit: 'd',
      count: 100
    }
  ];

  getAllAchievements() {
    return this.achievements;
  }

  getAchievementById(id: number) {
    return this.achievements.filter(x => x.id === id);
  }



}
