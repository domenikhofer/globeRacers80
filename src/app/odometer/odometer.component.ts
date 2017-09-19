import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {UpgradeService} from '../upgrade.service';
import {UserDataService} from '../user-data.service';


@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.scss']
})
export class OdometerComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() user;
  distance;
  @Output() distanceEmitter: EventEmitter<any> = new EventEmitter();
  allUpgrades;
  UserDataService;
  userUpgrades;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.allUpgrades = UpgradeService.getAllUpgrades();
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
    this.userUpgrades = this.UserDataService.getUserData(this.user).upgrades;
  }

  ngOnChanges(changes: any) {
    if (changes.clickCount && changes.clickCount.currentValue > 0) {
      this.userUpgrades = this.UserDataService.getUserData(this.user).upgrades;
      const mcUpgrades = this.userUpgrades.map(x => this.allUpgrades.find(
        y => y.upgrade.unit === 'mc' && y.id === x));
  let multiplier = 1;

      const operators = {
        '*': (a, b) => a * b,
        '+': (a, b) => a + b,
      };
      mcUpgrades.map(x => multiplier = operators[x.upgrade.operator](multiplier, x.upgrade.operand));
      this.distanceEmitter.emit(multiplier);
      this.distance = this.UserDataService.getUserData(this.user).distance;

    }
  }

}
