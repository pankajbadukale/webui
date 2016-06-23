declare var window: any;




import { Injectable, EventEmitter } from '@angular/core';

import { marker, shortDetails, geoLocation, LatLngLiteral } from './hotel-web.interface';

@Injectable()
export class HotelBusService {
  //save current page items
  public paginationResultCurrent: any = [];
  //save previous page itesm
  public paginationResultPrevious: any = [];
  //save next page items
  public paginationResultNext: any = [];

  public geoMarker: marker[] = [];

  public myLocation: LatLngLiteral = {
    lat: 0,
    lng: 0
  };

  private _currentHotelSelected: Object = {};

  public centerChange:EventEmitter<LatLngLiteral> = new EventEmitter();
  public currentHotelDataChanged: EventEmitter<Object> = new EventEmitter(); 

  pageView: string;

  constructor() {
    this.pageView = 'both';

    /******************************************/
    window.opeObject = this;
    /******************************************/
  }

  /**
   * set center location of map
   * in our case it will be user location
   */
  setMapCenter( newCenter: LatLngLiteral ) {
    this.myLocation = newCenter;
    this.centerChange.next(this.myLocation);
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

/**
 * updateMarkers
 * update already existing marker object
 */
  updateMarkers( items: marker[], newMarkers?: boolean ) {
    for(let obj of items) {
      this.geoMarker.push({
        lat: obj.lat,
        lng: obj.lng,
        label: obj.rest_header_title,
        draggable: false
      });
    }

    newMarkers ? this.addUserMarker() : null;
  }

  set currentHotelSelected(data: Object) {
    this._currentHotelSelected = data;
    this.currentHotelDataChanged.next(this._currentHotelSelected);
  }

  get currentHotelSelected(): Object {
    return this._currentHotelSelected;
  }

/**
 * add user location marker
 */
  addUserMarker() {
/*      this.geoMarker.push({
        lat: this.myLocation.lat,
        lng: this.myLocation.lng,
        label: "I",
        draggable: false
      });
      //put some marker data to show in info widnow*/
  }

/**
 * remove existing markers and re-create new marker on map
 */
  addMarkers( items: marker[] ) {
    this.geoMarker = [];
    this.paginationResultPrevious = this.paginationResultCurrent != null ? this.paginationResultCurrent : [];
    this.paginationResultCurrent = items;
    //get next page data here
    //TODO: add next page request 
    this.updateMarkers(items);
  }
}