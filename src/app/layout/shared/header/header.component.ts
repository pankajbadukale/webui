import { Component, OnInit, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '../../../framework';

import { SearchHotelComponent } from '../../../hotel';

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
