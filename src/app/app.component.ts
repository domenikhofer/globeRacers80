import {Component, OnInit} from '@angular/core';
import {UserDataService} from './user-data.service';
import {UpgradeService} from './upgrade.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clicks;
  distance;
  userData;
  UserDataService;
  UpgradeService;
  allUpgrades;
  ms;
  mc;
  randomUser;
  user;


  constructor(UserDataService: UserDataService, UpgradeService: UpgradeService, private http: HttpClient) {
    this.UserDataService = UserDataService;
    this.UpgradeService = UpgradeService;
  }

  ngOnInit() {
    this.randomUser = (Math.random().toString(36) + '00000000000000000').slice(2, 18);
    this.UserDataService.addUser(this.randomUser).subscribe(data => {
      this.user = data._id;
      this.UserDataService.getUserData(this.user)
        .subscribe(
          data2 => this.userData = data2,
          err => console.log(err),
          () => this.onUserDataLoaded());
    });
    }

 onUserDataLoaded() {
   this.UpgradeService.getAllUpgrades().subscribe(data => this.allUpgrades = data);

  setInterval(() => {
     this.ms = this.getMultiplier('ms')
    this.UserDataService.addDistance(this.user, this.ms).subscribe();
     this.UserDataService.getUserData(this.user).subscribe(data => {
       this.distance = data.data.distance;
       this.userData = data;
     });
   }, 1000);
 }


  onCarClicked() {
    this.UserDataService.addClicks(this.user, 1).subscribe();
   this.UserDataService.getUserData(this.user).subscribe(data => {
     this.clicks = data.data.clicks;
     this.userData = data;
   });
    this.mc = this.getMultiplier('mc');
    this.UserDataService.addDistance(this.user, this.mc).subscribe();
    this.UserDataService.getUserData(this.user).subscribe(data => {
      this.distance = data.data.distance;
      this.userData = data;
    });
  }

  onUpgradeClicked(upgrade) {
    this.getMultiplier(upgrade.upgrade.unit);
    if (upgrade.upgrade.unit === 'mc') {
      this.mc = this.getMultiplier('mc');
    } else {
      this.ms = this.getMultiplier('ms');
    }
  }

  getMultiplier(type: string) {
    const allUserUpgrades = this.userData.data.upgrades.map(x => this.allUpgrades.find(y => y.id === x));
    const typeUpgrades = allUserUpgrades.filter(x => x.upgrade.unit === type);

    let multiplier = (type === 'mc' ? 1 : 0);

    const operators = {
      '*': (a, b) => a * b,
      '+': (a, b) => a + b,
    };


    typeUpgrades.map(x => multiplier = operators[x.upgrade.operator](multiplier, x.upgrade.operand));
    return multiplier;
  }

}
