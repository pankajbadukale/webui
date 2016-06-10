import { Component, OnInit } from '@angular/core';

import { HotelBusService } from '../hotel-bus.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-hotel',
  templateUrl: 'search-hotel.component.html',
  styleUrls: ['search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  pageView: string;
  pageViewOptions: Object[];

  constructor(private _hotelService: HotelBusService) {
    this.pageViewOptions = [
      { value: 'both', text: 'Both' },
      { value: 'map', text: 'Map'},
      { value: 'list', text: 'List'}
    ];
    this.pageView = 'both';
  }

  ngOnInit() {
  }

  changePageView(e) {
    let selectedValue = e.srcElement.options[e.srcElement.selectedIndex].value;
    console.log(selectedValue);
    this._hotelService.setPageView(selectedValue);
  }

}
