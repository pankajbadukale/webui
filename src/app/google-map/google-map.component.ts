import { Component, OnInit } from '@angular/core';

import { HotelBusService } from '../hotel-bus.service';
import {
  SebmGoogleMap,
  GoogleMapsAPIWrapper
} from 'angular2-google-maps/core';


@Component({
  moduleId: module.id,
  selector: 'app-google-map',
  templateUrl: 'google-map.component.html',
  styleUrls: ['../../app.css'],
  directives: [SebmGoogleMap],
  providers: [HotelBusService, GoogleMapsAPIWrapper]
})

export class GoogleMapComponent implements OnInit {

  // google maps zoom level
  public zoom: number = 8;

  // initial center position for the map
  lat: number = 18.5632141;
  lng: number = 73.7771917;

  markers: marker[] = [];

  constructor(private _hotelBus: HotelBusService, private _map: GoogleMapsAPIWrapper) {
    this._map.getCenter().then((data) => {
      console.log("==============================================");
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  /*  this._hotelBus = _hotelBus;*/

/*    this.lat = this._hotelBus.myLocation.lat;
    this.lng = this._hotelBus.myLocation.lng;

    this.markers = this._hotelBus.geoMarker;

    console.log('this is constructor message of google map');
    setTimeout(() => {
      console.log(this.markers);
    }, 5000);*/
    
  }

  ngOnInit() {
    console.log('this is init function message');
  }
  
  /*markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ];*/
  
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  /*mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }*/
  
  /*markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }*/
}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}