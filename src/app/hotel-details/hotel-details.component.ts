import { Component, OnInit } from '@angular/core';

import { GoogleMapComponent } from '../google-map/google-map.component';

import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-details',
  templateUrl: 'hotel-details.component.html',
  directives: [GoogleMapComponent],
  host:     {
    '[class.app-hotel-details]':'true'
  },
  styles: [
    ` .sebm-google-map-container {
        height: 300px!important;
      }
    `
  ]
})
export class HotelDetailsComponent implements OnInit {
  defaultImgUrl: string;

  constructor(private _hotelBusService: HotelBusService) {
    console.log(this._hotelBusService);
    this.defaultImgUrl = defaultImages.restaurent;
  }

  ngOnInit() {
  }

}
