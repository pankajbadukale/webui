import { Component, OnInit, TemplateRef, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, NgClass } from '../framework';

import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { GoogleMapComponent } from '../google-map/google-map.component';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';


import { HotelService } from './hotel.service';
import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';


@Component({
  moduleId: module.id,
  selector: 'app-hotel',
  templateUrl: 'hotel.component.html',
  directives: [GoogleMapComponent, HotelListComponent, HotelDetailsComponent, NgClass, ROUTER_DIRECTIVES],
  providers: [defaultImages, ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class HotelComponent implements OnInit {

  constructor(private _hService: HotelService, private _hotelService: HotelBusService) {
      //get getLocation
      this._hService.nearestRestaurants(this._hotelService.myLocation).subscribe( result => {
        this._hotelService.addMarkers(result);
      });
  }

  ngOnInit() {
  }

}
