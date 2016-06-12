import { Component, OnInit } from '@angular/core';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/services/google-maps-api-wrapper';

@Component({
  moduleId: module.id,
  selector: 'app-google-map-controller',
  templateUrl: 'google-map-controller.component.html',
  styleUrls: ['google-map-controller.component.css']
})
export class GoogleMapControllerComponent implements OnInit {

    constructor(private _wrapper: GoogleMapsAPIWrapper) {
        this._wrapper.getMap().then((m) => {
            console.log('Got the map!: ', m);
        });
    }

    ngOnInit() {
    }

}
