import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { GoogleMapComponent } from '../google-map/google-map.component';

import { OverviewComponent } from './overview/overview.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuComponent } from './menu/menu.component';
import { PhotoComponent } from './photo/photo.component';
import { ReviewComponent } from './review/review.component';
import { FaqComponent } from './faq/faq.component';

import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';

import { HotelService } from '../hotel/hotel.service';


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
  defaultImgUrl: string;

  urls: Object[];

  constructor(private _hotelBusService: HotelBusService, private _hs: HotelService) {
    this._hs.getRestauretnInfo().subscribe( result => {
      this._hotelBusService.currentHotelSelected = result[0];
      console.log(this._hotelBusService.currentHotelSelected);
    });

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
