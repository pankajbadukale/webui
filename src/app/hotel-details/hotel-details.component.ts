import { Component, OnInit } from '@angular/core';

import { GoogleMapComponent } from '../google-map/google-map.component';

import { HotelBusService } from '../hotel-bus.service';

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

  constructor(private _hotelBusService: HotelBusService) {
    console.log(this._hotelBusService);
  }

  ngOnInit() {
  }

}
