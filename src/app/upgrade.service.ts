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
      description: 'take a sip of a protein shake to boost your speed and drive twice as fast'
    },
    {
      id: 1,
      title: 'Müsli Riegel',
      unlocks: {unit: 'c', count: 30},
      upgrade: {unit: 'mc', operator: '+', operand: 0.5},
      image: '../assets/chocolate.svg',
      description: 'müesli riegel sabfksdahfsdkafhldsaf'
    },
    {
      id: 2,
      title: 'eBike Motor',
      unlocks: {unit: 'd', count: 40},
      upgrade: {unit: 'ms', operator: '+', operand: 1},
      image: '../assets/electric.svg',
      description: 'eBike Motor sabfksdahfsdkafhldsaf'
    },
    {
      id: 3,
      title: 'Mofa Motor',
      unlocks: {unit: 'd', count: 120},
      upgrade: {unit: 'ms', operator: '+', operand: 2},
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
