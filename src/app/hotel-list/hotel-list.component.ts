import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { FilterHotelComponent } from '../filter-hotel/filter-hotel.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

import { HotelBusService } from '../hotel-bus.service';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.component.html',
  directives: [FilterHotelComponent, SearchHotelComponent, NgClass]
})
export class HotelListComponent implements OnInit {

  constructor(private _hotelService: HotelBusService) {}

  ngOnInit() {
  }

}
