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
  @Input() userData;
  @Output() upgradeClicked: EventEmitter<any> = new EventEmitter();
  allUpgrades;
  UserDataService;
  UpgradeService;
  availableUpgrades;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.UpgradeService = UpgradeService;
    this.allUpgrades = UpgradeService.getAllUpgrades();
    this.UserDataService = UserDataService;
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes. userData && changes.userData.firstChange === false ) {
      this.displayUpgrades();
    }

  }

  onUpgradeClick(id) {
    this.UserDataService.addUpgrade(this.userData._id, id).subscribe(() => {
      this.displayUpgrades();
    });
    this.upgradeClicked.emit(this.UpgradeService.getUpgradeById(id));
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

  showinfo($event) {
    const infobox = $event.currentTarget.previousElementSibling.classList;
    infobox.toggle('hidden');
  }

}
