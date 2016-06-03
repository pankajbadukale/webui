import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WebuiAppComponent, environment } from './app/';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(WebuiAppComponent, [ANGULAR2_GOOGLE_MAPS_PROVIDERS]);

