import { Component, OnInit } from '@angular/core';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/services/google-maps-api-wrapper';
//import { MarkerOptions } from 'angular2-google-maps/services/google-maps-types';
import { LatLngLiteral, MarkerOptions, InfoWindowOptions } from '../hotel-web.interface';

import { HotelBusService } from '../hotel-bus.service';

@Component({
  moduleId: module.id,
  selector: 'app-google-map-controller',
  templateUrl: 'google-map-controller.component.html'
})
export class GoogleMapControllerComponent implements OnInit {

    public centerLocationMarker: MarkerOptions;
    public centerLocationInfoWin: InfoWindowOptions;

    constructor(private _wrapper: GoogleMapsAPIWrapper, private _hbS: HotelBusService) {
        
        /*this._wrapper.getMap().then((m) => {
            console.log('Got the map!: ', m);
        });*/

        this._hbS.centerChange.subscribe((centerLatLng: LatLngLiteral) => {
            this.centerLocationMarker = {
                position: centerLatLng,
                title: 'ME',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
            };
            this.centerLocationInfoWin = {
                position: centerLatLng,
                content: 'ME'
            };
            this._wrapper.createMarker(this.centerLocationMarker);
            this._wrapper.createInfoWindow(this.centerLocationInfoWin);
        });
    }

    ngOnInit() {
        console.log("initnt message");
    }
}
