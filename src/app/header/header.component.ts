import { Component, OnInit } from '@angular/core';
import { Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';

import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  directives: [SearchHotelComponent, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
