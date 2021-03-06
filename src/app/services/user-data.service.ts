import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as bcrypt from 'bcryptjs';
import {environment} from '../../environments/environment';

@Injectable()
export class UserDataService {

  private isUserLoggedIn;
  private saltRounds = 10;
  private username;
  private endpoint = environment.server;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(username: string) {
    this.isUserLoggedIn = true;
    this.username = username;
    localStorage.setItem('globeRacers80User', JSON.stringify(this.username));
  }

  setUserLoggedOut(username: string) {
    this.username = username;
    this.isUserLoggedIn = false;
    localStorage.setItem('globeRacers80User', null);
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('globeRacers80User')) || null;
  }

  async addUser(username: string, hash: string): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/add/', {username, hash}).toPromise();
  }

  async getUserById(id: string): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/get/byId', {id}).toPromise();
  }

  async getUserByUsername(username: string): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/get/byUsername', {username}).toPromise();
  }


  async addClicks(id: string, clicks: number): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/add/click', {id, clicks}).toPromise();
  }

  async addDistance(id: string, distance: number): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/add/distance', {id, distance}).toPromise();
  }

  async addAchievement(id: string, achievementId: number): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/add/achievement', {id, achievementId}).toPromise();
  }

  async addUpgrade(id: string, upgradeId: number): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/add/upgrade', {id, upgradeId}).toPromise();
  }

  getPasswordHash(password: string): string {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  checkPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }

  async getTopUsers(): Promise<any> {
    return await this.http.get(this.endpoint + '/db/user/get/topUsers').toPromise();
  }

  async resetUser(user: string): Promise<any> {
    return await this.http.post(this.endpoint + '/db/user/reset', {user}).toPromise();
  }
}

