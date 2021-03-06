import { Component, OnInit, MapsAPILoader, NoOpMapsAPILoader, MouseEvent, ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from '../../../framework';
import { DataBusService, defaultImages } from '../../../util';
import { GoogleMapControllerComponent } from '../';

@Component({
  moduleId: module.id,
  selector: 'app-google-map',
  host:     {
    '[class.app-google-map]':'true'
  },
  templateUrl: 'google-map.component.html',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, GoogleMapControllerComponent]
})

export class GoogleMapComponent implements OnInit {

// google maps zoom level
  zoom: number = 16;
  
  // initial center position for the map
  lat: number;
  lng: number;

  markers: marker[];

  public defaultImgUrl: string;

  constructor(private _dataBus: DataBusService) {}

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