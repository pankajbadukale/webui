import { Component, TemplateRef, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, NgClass, HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS, FOLDER, CDomNode, lang } from './framework';

import { HeaderComponent, FooterComponent } from './layout';
import { HotelComponent, HotelService, HotelDetailsComponent } from './hotel';
import { DataBusService } from './util';

@Component({
  moduleId: module.id,
  selector: CDomNode.app,
  templateUrl: FOLDER.TEMPLATE(),
  directives: [HeaderComponent, FooterComponent, NgClass, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS, ROUTER_PROVIDERS, DataBusService, HotelService]
})
@Routes([
   { path: HotelDetailsComponent.path, component: HotelDetailsComponent },
   { path: HotelComponent.path, component: HotelComponent }
])
export class WebuiAppComponent {
    @lang
    
    title: string;
    public lang: any;
    constructor(private _dataBus: DataBusService) {
      this.title= 'app';
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
