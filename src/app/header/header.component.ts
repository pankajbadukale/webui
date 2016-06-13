import { Component, OnInit } from '@angular/core';

import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  directives: [SearchHotelComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
