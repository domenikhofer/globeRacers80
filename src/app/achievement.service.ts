import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AchievementService {

  constructor(private http: HttpClient) { }

  getAllAchievements() {
    return this.http.get('http://localhost:1993/db/achievement/get/all');
  }

}
