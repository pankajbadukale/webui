import { Component, TemplateRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { RestaurantsInCityComponent } from './+restaurants-in-city/restaurants-in-city.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { WebuiService } from './webui.service';
import { HotelBusService } from './hotel-bus.service';
import { defaultImages } from './hotel-web.static.class';


@Component({
  moduleId: module.id,
  selector: 'webui-app',
  templateUrl: 'webui.component.html',
  styleUrls: ['webui.component.css'],
  directives: [GoogleMapComponent, HotelListComponent, HeaderComponent, FooterComponent, NgClass],
  providers: [WebuiService, HTTP_PROVIDERS, HotelBusService, defaultImages, ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class WebuiAppComponent {
    public title = "pankaj";
    public pageState: string;    

    constructor(private _webuiService: WebuiService, private _hotelService: HotelBusService) {
      //get getLocation
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              this._hotelService.myLocation =  {
                lat: position.coords.latitude, 
                lng: position.coords.longitude
              };
               this._webuiService.nearestRestaurants(this._hotelService.myLocation).subscribe( result => {
                 this._hotelService.addMarkers(result);
               });
          });
      } else {
        console.log(`Geolocation is not supported by this browser.`);
      }
    }
}

interface geomark {
	lat: number;
	lng: number;
}