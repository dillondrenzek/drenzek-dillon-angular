import { InjectionToken } from '@angular/core';

export interface AppConfig {
  baseUrl: string;
  apiBaseUrl: string;
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const DEV_APP_CONFIG: AppConfig = {
  baseUrl: 'http://localhost:8085/',
  apiBaseUrl: 'http://localhost:8085/api/'
};

export const appConfigProvider = { provide: APP_CONFIG, useValue: DEV_APP_CONFIG };
