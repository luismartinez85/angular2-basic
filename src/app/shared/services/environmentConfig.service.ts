import { Injectable } from '@angular/core';


@Injectable()
export class EnvironmentConfigService {
  
  api: string;
  api1: string

  constructor() {
    this.api = ENVIRONMENT_CONFIG.api;
    this.api1 = ENVIRONMENT_CONFIG.api1;
  }

}