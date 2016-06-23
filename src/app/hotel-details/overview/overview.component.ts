import { Component, OnInit } from '@angular/core';

import { HotelBusService } from '../../hotel-bus.service';


@Component({
  moduleId: module.id,
  selector: 'app-overview',
  templateUrl: 'overview.component.html'
})
export class OverviewComponent implements OnInit {

  constructor(private _hbs: HotelBusService) {
    
  }

  ngOnInit() {
  }

}
