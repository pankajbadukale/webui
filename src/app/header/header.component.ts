import { Component, OnInit } from '@angular/core';

import { SearchHotelComponent } from '../search-hotel/search-hotel.component';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [SearchHotelComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
