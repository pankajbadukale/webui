import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { GoogleMapComponent } from '../google-map/google-map.component';

import { OverviewComponent } from './overview/overview.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuComponent } from './menu/menu.component';
import { PhotoComponent } from './photo/photo.component';
import { ReviewComponent } from './review/review.component';
import { FaqComponent } from './faq/faq.component';

import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-details',
  templateUrl: 'hotel-details.component.html',
  directives: [GoogleMapComponent, ROUTER_DIRECTIVES],
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
  defaultImgUrl: string;

  constructor(private _hotelBusService: HotelBusService) {
    console.log(this._hotelBusService);
    this.defaultImgUrl = defaultImages.restaurent;
  }

  ngOnInit() {
  }

}
