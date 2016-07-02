import { Component, TemplateRef, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, NgClass, HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS } from './framework';

import { HeaderComponent, FooterComponent } from './layout';
import { HotelComponent, HotelService } from './hotel';
import { DataBusService } from './util';

@Component({
  moduleId: module.id,
  selector: 'webui-app',
  templateUrl: 'webui.component.html',
  directives: [HeaderComponent, FooterComponent, NgClass, ROUTER_DIRECTIVES, HotelComponent],
  providers: [HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS, ROUTER_PROVIDERS, DataBusService, HotelService]
})
@Routes([
   {  path: '/', component: HotelComponent}
])
export class WebuiAppComponent {
  title: string = 'app';
    constructor(private _dataBus: DataBusService) {
      //get getLocation
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              this._dataBus.setMapCenter({
                lat: position.coords.latitude, 
                lng: position.coords.longitude
              });
          });
      } else {
        console.log(`Geolocation is not supported by this browser.`);
      }
    }
}
