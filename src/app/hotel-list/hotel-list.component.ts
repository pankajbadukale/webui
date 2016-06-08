import { Component, OnInit } from '@angular/core';
import { FilterHotelComponent } from '../filter-hotel/filter-hotel.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.component.html',
  directives: [FilterHotelComponent, SearchHotelComponent]
})
export class HotelListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
