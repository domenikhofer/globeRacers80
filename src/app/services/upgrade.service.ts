import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class UpgradeService {

  constructor(private http: HttpClient) { }
  private endpoint = environment.server;

  async getAllUpgrades(): Promise<any> {
    return await this.http.get(this.endpoint + '/db/upgrade/get/all').toPromise();
  }
}
