import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { RestaurantsInCityComponent } from './+restaurants-in-city/restaurants-in-city.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

import { WebuiService } from './webui.service';
import { HotelBusService } from './hotel-bus.service';


@Component({
  moduleId: module.id,
  selector: 'webui-app',
  templateUrl: 'webui.component.html',
  styleUrls: ['webui.component.css'],
  directives: [GoogleMapComponent, HotelListComponent],
  providers: [WebuiService, HTTP_PROVIDERS, HotelBusService]
})
export class WebuiAppComponent {
    public title = "pankaj";    

    constructor(private _webuiService: WebuiService, private _hotelBus: HotelBusService) {
      //get getLocation
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              this._hotelBus.myLocation =  {
                lat: position.coords.latitude, 
                lng: position.coords.longitude
              };
              console.log(this._hotelBus.myLocation);
              /* this._webuiService.nearestRestaurants(this._hotelBus.myLocation).subscribe( result => {
                  console.log(result);
                  
                  //get all markers
                  for(let obj of result) {
                    this._hotelBus.geoMarker.push({
                      lat: obj.lat,
                      lng: obj.lng,
                      label: obj.headerTitle,
                      draggable: false
                    });
                  }

              });*/
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