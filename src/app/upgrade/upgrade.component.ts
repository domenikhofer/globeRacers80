import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {UpgradeService} from '../upgrade.service';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() clickCount;
  @Output() upgradeClicked: EventEmitter<any> = new EventEmitter();
  allUpgrades;
  userData;
  userUpgrades;
  UserDataService;
  UpgradeService;
  availableUpgrades;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.UpgradeService = UpgradeService;
    this.allUpgrades = UpgradeService.getAllUpgrades();
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
    this.userData = this.UserDataService.getUserData();
    this.userUpgrades = this.userData.upgrades;
  }

  ngOnChanges() {
  this.displayUpgrades();
  }

  onUpgradeClick(id) {
this.UserDataService.addUpgrade(id);
this.displayUpgrades();
this.upgradeClicked.emit(this.UpgradeService.getUpgradeById(id));
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
