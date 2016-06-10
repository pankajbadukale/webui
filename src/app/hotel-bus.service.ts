import { Injectable } from '@angular/core';

@Injectable()
export class HotelBusService {
  public geoMarker: any[] = [];

  public myLocation: any = {
    lat: 0,
    lng: 0
  };

  pageView;

  constructor() {
    this.pageView = 'both';
  }

/**
 * setPageView
 * Function to change front page view to different way for tablet and web
 * 
 * @input String 
 */
  setPageView( pageView?: string ) {
    console.log("form service", pageView);
    this.pageView = pageView || 'both';
  }



}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}