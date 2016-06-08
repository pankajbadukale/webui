import { Injectable } from '@angular/core';

@Injectable()
export class HotelBusService {

  public geoMarker: any[] = [];

  public myLocation: any = {
    lat: 0,
    lng: 0
  };

  constructor() {}

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}