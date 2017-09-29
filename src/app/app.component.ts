import {Component, OnInit} from '@angular/core';
import {UserDataService} from './user-data.service';
import {UpgradeService} from './upgrade.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GlobeRacers80';
  clicks;
  distance;
  multiplier;
  userData;
  UserDataService;
  UpgradeService;
  userUpgrades;
  allUpgrades;
  ms;
  mc;
  user = 'user1';


  constructor(UserDataService: UserDataService, UpgradeService: UpgradeService, private http: HttpClient) {
    this.UserDataService = UserDataService;
    this.userData = this.UserDataService.getUserData(this.user);
    this.userUpgrades = this.userData.upgrades;
    this.allUpgrades = UpgradeService.getAllUpgrades();
  }

  ngOnInit() {
    setInterval(() => {
      this.ms = this.getMultiplier('ms')
      this.UserDataService.addDistance(this.ms);
      this.distance = this.UserDataService.getUserData().distance;
    }, 1000);

    this.http.post('http://localhost:1993/db/user/add/', {name: 'test'}).subscribe(data => console.log(data));

  }


  onCarClicked() {
    this.clicks = this.UserDataService.addClicks(1);
    this.mc = this.getMultiplier('mc');
    this.UserDataService.addDistance(this.mc);
    this.distance = this.UserDataService.getUserData().distance;
  }

  onUpgradeClicked(upgrade) {
this.getMultiplier(upgrade[0].upgrade.unit);
if (upgrade[0].upgrade.unit === 'mc') {
  this.mc = this.getMultiplier('mc');
}else{
  this.ms = this.getMultiplier('ms');
}
  }

  getMultiplier(type: string) {
const allUserUpgrades = this.userUpgrades.map(x => this.allUpgrades.find(y => y.id === x));

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
