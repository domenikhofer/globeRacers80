import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';


@Injectable()
export class AchievementService {

  constructor(private http: HttpClient) { }
  private endpoint = environment.server;

  async getAllAchievements(): Promise<any> {
    return await this.http.get(this.endpoint + '/db/achievement/get/all').toPromise();
  }

}
