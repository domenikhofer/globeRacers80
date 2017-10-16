import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UpgradeService {

  constructor(private http: HttpClient) { }

  getAllUpgrades() {
    return this.http.get('http://localhost:1993/db/upgrade/get/all');
  }
}
