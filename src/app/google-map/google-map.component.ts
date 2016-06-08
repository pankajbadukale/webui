import { Component, OnInit } from '@angular/core';

import { HotelBusService } from '../hotel-bus.service';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';


@Component({
  moduleId: module.id,
  selector: 'app-google-map',
  templateUrl: 'google-map.component.html',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [HotelBusService]
})

export class GoogleMapComponent implements OnInit {

  // google maps zoom level
  public zoom: number = 8;

  // initial center position for the map
  lat: number;
  lng: number;

  markers: marker[] = [];

  constructor(private _map: MapsAPILoader, private _hotelBus: HotelBusService) {
    this._hotelBus = _hotelBus;

    this.lat = 18.5631999;
    this.lng = 73.7770309;

    this.markers = [
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
  ];

    console.log('this is constructor message of google map');
    setTimeout(() => {
      console.log(this.markers);
    }, 5000);
    
  }

  ngOnInit() {
    console.log('this is init function message');
  }  
  
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