import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

import { FilterHotelComponent } from '../filter-hotel/filter-hotel.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.component.html',
  directives: [FilterHotelComponent, SearchHotelComponent, NgClass, NgFor]
})
export class HotelListComponent implements OnInit {
  public defaultImgUrl: string;
  
  constructor(private _hotelService: HotelBusService) {
    this.defaultImgUrl = defaultImages.restaurent;
  }

  ngOnInit() {
  }

}
