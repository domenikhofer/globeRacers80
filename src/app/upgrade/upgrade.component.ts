import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {UpgradeService} from '../upgrade.service';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit, OnChanges {
  allUpgrades;
  userData;
  userUpgrades;
  UserDataService;
  @Input() distance;
  @Input() clickCount;
  @Input() user;
  availableUpgrades;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.allUpgrades = UpgradeService.getAllUpgrades();
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
    this.userData = this.UserDataService.getUserData(this.user);
    this.userUpgrades = this.userData.upgrades;
  }

  ngOnChanges() {
  this.displayUpgrades();
  }

  onUpgradeClick(id) {
this.UserDataService.addUpgrade(this.user, id);
this.displayUpgrades();

  }

  displayUpgrades() {
    this.availableUpgrades = this.allUpgrades.filter(
      x =>
      ((x.unlocks.unit === 'c' && x.unlocks.count <= this.clickCount) ||
      (x.unlocks.unit === 'd' && x.unlocks.count <= this.distance)) &&
      this.userUpgrades.indexOf(x.id) === -1
    );
  }

}
