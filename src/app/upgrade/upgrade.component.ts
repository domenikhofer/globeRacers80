import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {UpgradeService} from '../services/upgrade.service';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() clickCount;
  @Input() userData;
  @Output() upgradeClicked: EventEmitter<any> = new EventEmitter();
  allUpgrades;
  UserDataService;
  UpgradeService;
  availableUpgrades;
  showBox = false;
  clickedId;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.UpgradeService = UpgradeService;
    this.UserDataService = UserDataService;
  }

  async ngOnInit() {
    this.allUpgrades = await this.UpgradeService.getAllUpgrades();
  }

  ngOnChanges(changes) {
    if (changes.userData && changes.userData.firstChange === false ) {
      this.displayUpgrades();
    }

  }

  async onUpgradeClick(id) {
    await this.UserDataService.addUpgrade(this.userData._id, id);
      this.displayUpgrades();
    this.upgradeClicked.emit(this.allUpgrades.find(x => x.id === id));
  }

  displayUpgrades() {
    const userUpgrades = this.userData.data.upgrades;
    this.availableUpgrades = this.allUpgrades.filter(
      x =>
      ((x.unlocks.unit === 'c' && x.unlocks.count <= this.clickCount) ||
      (x.unlocks.unit === 'd' && x.unlocks.count <= this.distance)) &&
      userUpgrades.indexOf(x.id) === -1
    );
  }

  showinfo(id) {
    this.showBox = true;
    this.clickedId = id;
    console.log(this.showBox);
  }

  hideInfo(id) {
    this.showBox = false;
    this.clickedId = id;
    console.log(this.showBox);
  }

}
