import { Injectable } from '@angular/core';

@Injectable()
export class UpgradeService {

  constructor() { }

  upgrades = [
    {
      id: 0,
      title: 'Protein Shake',
      unlocks: {unit: 'c', count: 100},
      upgrade: {unit: 'mc', operator: '*', operand: 2}
    },
    {
      id: 1,
      title: 'eBike Motor',
      unlocks: {unit: 'd', count: 1000},
      upgrade: {unit: 'ms', operator: '+', operand: 1}
    }
  ];

}
