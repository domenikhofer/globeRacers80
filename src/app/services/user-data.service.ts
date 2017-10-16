import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  constructor(private http: HttpClient) {
  }


  addUser(user: string) {
   return this.http.post('http://localhost:1993/db/user/add/', {username: user});
  }

  getUserData(user: string) {
    return this.http.post('http://localhost:1993/db/user/get/byId', {id: user});
  }

  addClicks(user: string, clicks: number) {
    return this.http.post('http://localhost:1993/db/user/add/click', {id: user, clicks: clicks});
}

  addDistance(user: string, distance: number) {
    return this.http.post('http://localhost:1993/db/user/add/distance', {id: user, distance: distance});
  }

  addAchievement(user: string, id: number) {
    return this.http.post('http://localhost:1993/db/user/add/achievement', {id: user, achievementId: id});
  }

  addUpgrade(user: string, id: number) {
    return this.http.post('http://localhost:1993/db/user/add/upgrade', {id: user, upgradeId: id});
  }

}



