export { 
  Component as Component, 
  TemplateRef as TemplateRef,
  Injectable as Injectable,
  EventEmitter as EventEmitter,
  OnInit as OnInit
} from '@angular/core';

export { 
  NgClass as NgClass, 
  NgFor as NgFor, 
  NgIf as NgIf 
} from '@angular/common';

export { 
  Route as Route, 
  ROUTER_DIRECTIVES as ROUTER_DIRECTIVES, 
  ROUTER_PROVIDERS as ROUTER_PROVIDERS, 
  Routes as Routes,
  Router as Router
} from '@angular/router';

export { 
  HTTP_PROVIDERS as HTTP_PROVIDERS,
  Response as Response, 
  Http as Http
} from '@angular/http';

export { 
  Observable as Observable 
} from 'rxjs/Observable';

export {
  MapsAPILoader as MapsAPILoader,
  NoOpMapsAPILoader as NoOpMapsAPILoader,
  MouseEvent as MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS as ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES as ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

export { 
  GoogleMapsAPIWrapper as GoogleMapsAPIWrapper 
} from 'angular2-google-maps/services/google-maps-api-wrapper';


/*-----------------======CUSTOM EXPORT DECLARATION=====--------------------*/
import { Device } from './util';
export class clientDevice {
  public static device(device?: Device) {
    return device !== undefined ? Device[device] : Device[Device.web];
  }
}
export class FOLDER {
  public static TEMPLATE (other?: string) {
    return other !== undefined && other !== '' ? `templates/${clientDevice.device()}/${other}.html` : `templates/${clientDevice.device()}/component.html`;
  }
}
export class CDomNode {
  public static app: string = 'webui-app';
  public static header:string = 'app-header';
  public static footer:string = 'app-footer';
  public static hotel:string = 'app-hotel';
}

/*--------------========DECORATORS==========-----------------*/
// Decorator to insert language object in each class where ever required using property accessor
import { LANG } from './util';
export function lang(target, key) {
  target.lang = LANG;
}