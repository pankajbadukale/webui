import { Component, OnInit, NgClass } from '../framework';

import { HotelBusService } from '../hotel-bus.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-hotel',
  templateUrl: 'search-hotel.component.html',
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
    this.showHideFilters = !this.showHideFilters;
  }

  changePageView(e) {
    console.log(e.target.value);
    this._hotelService.setPageView(e.target.value);
  }

}
