import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AchievementService {

  constructor(private http: HttpClient) { }

  async getAllAchievements(): Promise<any> {
    return await this.http.get('http://localhost:1993/db/achievement/get/all').toPromise();
  }

}
