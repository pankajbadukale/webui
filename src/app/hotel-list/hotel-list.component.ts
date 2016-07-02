import { Component, OnInit, NgClass, NgFor, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from  '../framework';

import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

import { HotelBusService } from '../hotel-bus.service';
import { defaultImages } from '../hotel-web.static.class';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.component.html',
  directives: [SearchHotelComponent, NgClass, NgFor, ROUTER_DIRECTIVES]
})
export class HotelListComponent implements OnInit {
  public defaultImgUrl: string;
  
  constructor(private _hotelService: HotelBusService) {
    this.defaultImgUrl = defaultImages.restaurent;
  }

  ngOnInit() {
  }

  getCusines( cusines ) {
    return cusines.split(',');
  }

  

}
