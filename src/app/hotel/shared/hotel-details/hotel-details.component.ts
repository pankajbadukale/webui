//private _dataBus: DataBusService
import { Component, OnInit, NgFor, ROUTER_DIRECTIVES, Routes, Router } from '../../../framework';

import { GoogleMapComponent } from '../../../gmap';

import { OverviewComponent, FeedbackComponent, MenuComponent, PhotoComponent, ReviewComponent, FaqComponent } from './shared';
import {  defaultImages } from '../../../util';
//import { HotelService } from '../../../hotel';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-details',
  templateUrl: 'hotel-details.component.html',
  directives: [GoogleMapComponent, ROUTER_DIRECTIVES, NgFor],
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
@Routes([
  { path: '/overview', component: OverviewComponent },
  { path: '/feedback', component: FeedbackComponent },
  { path: '/menu', component: MenuComponent },
  { path: '/photo', component: PhotoComponent },
  { path: '/review', component: ReviewComponent },
  { path: '/faq', component: FaqComponent },
])
export class HotelDetailsComponent implements OnInit {
  public static path: string = '/hotel';
  
  defaultImgUrl: string;

  urls: Object[];

  constructor() {
/*    this._hs
private _hs: HotelService.getRestauretnInfo().subscribe( result => {
      this._dataBus.saveHotel(result[0]);
    });*/

    this.defaultImgUrl = defaultImages.restaurent;

    this.urls = [
      { link: '/overview', label: 'Overview'},
      { link: '/feedback', label: 'Feedback'},
      { link: '/menu', label: 'Menu'},
      { link: '/photo', label: 'Photos'},
      { link: '/review', label: 'Review'},
      { link: '/faq', label: 'Faq'}
    ];
  }

  ngOnInit() {
  }
}
