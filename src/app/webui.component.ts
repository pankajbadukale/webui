import { Component, TemplateRef, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, NgClass, HTTP_PROVIDERS  } from './framework';

import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

import { HotelBusService } from './hotel-bus.service';
import { HotelService } from './hotel/hotel.service';

@Component({
  moduleId: module.id,
  selector: 'webui-app',
  templateUrl: 'webui.component.html',
  directives: [HeaderComponent, FooterComponent, NgClass, ROUTER_DIRECTIVES, HotelComponent],
  providers: [HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS, ROUTER_PROVIDERS, HotelBusService, HotelService]
})
@Routes([
   {  path: '/hdetails', component: HotelDetailsComponent},
   {  path: '/', component: HotelComponent}

])
export class WebuiAppComponent {
  title: string = 'app';
    constructor(private _hotelBusService: HotelBusService) {
      console.log("App started");

      //get getLocation
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              this._hotelBusService.setMapCenter({
                lat: position.coords.latitude, 
                lng: position.coords.longitude
              });
          });
      } else {
        console.log(`Geolocation is not supported by this browser.`);
      }
    }
}
