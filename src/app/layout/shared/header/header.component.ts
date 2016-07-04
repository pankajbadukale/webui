import { Component, OnInit, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, FOLDER, CDomNode } from '../../../framework';

import { SearchHotelComponent } from '../../../hotel';

@Component({
  moduleId: module.id,
  selector: CDomNode.header,
  templateUrl: FOLDER.TEMPLATE(),
  directives: [SearchHotelComponent, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
