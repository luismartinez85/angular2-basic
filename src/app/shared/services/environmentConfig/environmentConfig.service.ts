import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentConfigService {

  api: string;
  api1: string;

  constructor() {
    /*
    *  ENVIRONMENT_CONFIG.api is a value defined in /config/app.config.json
    *  ENVIRONMENT_CONFIG.api1 is a value defined in /config/app.config.json
    */

    this.api = ENVIRONMENT_CONFIG.api;
    this.api1 = ENVIRONMENT_CONFIG.api1;
  }
}
