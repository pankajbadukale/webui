import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { HotelBusService } from '../hotel-bus.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-hotel',
  templateUrl: 'search-hotel.component.html',
  styleUrls: ['search-hotel.component.css'],
  directives: [NgClass]
})
export class SearchHotelComponent implements OnInit {
  pageView: string;
  pageViewOptions: Object[];
  showHideFilters: boolean;

  constructor(private _hotelService: HotelBusService) {
    this.pageViewOptions = [
      { value: 'both', text: 'Both' },
      { value: 'map', text: 'Map'},
      { value: 'list', text: 'List'}
    ];
    this.pageView = 'both';
    this.showHideFilters = false;
  }

  ngOnInit() {
  }

  toggleFilter() {
    console.log(this.showHideFilters);
    this.showHideFilters = !this.showHideFilters;
  }

  changePageView(e) {
    let selectedValue = e.srcElement.options[e.srcElement.selectedIndex].value;
    console.log(selectedValue);
    this._hotelService.setPageView(selectedValue);
  }

}
