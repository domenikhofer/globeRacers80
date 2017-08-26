import { Injectable } from '@angular/core';

@Injectable()
export class UpgradeService {

  constructor() { }

  upgrades = [
    {
      id: 0,
      title: 'Protein_Shake',
      unlocks: {unit: 'c', count: 20},
      upgrade: {unit: 'mc', operator: '*', operand: 2},
      image: '../assets/coke.svg',
      description: 'take a sip of a protein shake and boost your speed and makes you twice as fast'
    },
    {
      id: 1,
      title: 'Müsli Riegel',
      unlocks: {unit: 'c', count: 30},
      upgrade: {unit: 'mc', operator: '+', operand: 0.5},
      image: '../assets/chocolate.svg'
    },
    {
      id: 2,
      title: 'eBike Motor (doesnt work yet)',
      unlocks: {unit: 'd', count: 40},
      upgrade: {unit: 'ms', operator: '+', operand: 1},
      image: '../assets/electric.svg'
    }
  ];



  getUpgradeById(id: number) {
    return this.upgrades.filter(x => x.id === id);
  }

  getAllUpgrades() {
    return this.upgrades;
  }
}
