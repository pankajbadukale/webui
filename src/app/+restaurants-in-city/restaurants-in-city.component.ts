import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-restaurants-in-city',
  templateUrl: 'restaurants-in-city.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/restaurant/:name', component: HotelDetailsComponent}
])
export class RestaurantsInCityComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
