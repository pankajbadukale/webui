import { Component, OnInit,ElementRef } from '@angular/core';

import { GoogleMapControllerComponent } from '../google-map-controller';

import { HotelBusService } from '../hotel-bus.service';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

import { defaultImages } from '../hotel-web.static.class';


@Component({
  moduleId: module.id,
  selector: 'app-google-map',
  host:     {
    '[class.app-google-map]':'true'
  },
  templateUrl: 'google-map.component.html',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, GoogleMapControllerComponent],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})

export class GoogleMapComponent implements OnInit {

// google maps zoom level
  zoom: number = 16;
  
  // initial center position for the map
  lat: number;
  lng: number;

  markers: marker[];

  public defaultImgUrl: string;

  constructor(private _htS: HotelBusService) {}

  ngOnInit() {
    this.defaultImgUrl = defaultImages.restaurent;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
/*    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });*/
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  changece() {
    this.lat = 18.569022699999998;
    this.lng = 73.7704439;
    this.zoom = 16;

    this.markers.push({
      lat: this.lat,
      lng: this.lng,
      draggable: false,
      isCenter: true,
      label: 'Center',
    });
  }
}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  isCenter?: boolean
}