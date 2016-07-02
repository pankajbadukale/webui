import { Component, OnInit, NgClass, NgFor, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from  '../../../framework';
import { HotelDetailsComponent } from '../';
import { defaultImages, DataBusService } from '../../../util';

@Component({
  moduleId: module.id,
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.component.html',
  directives: [NgClass, NgFor, ROUTER_DIRECTIVES]
})
export class HotelListComponent implements OnInit {
  public defaultImgUrl: string;
  
  constructor(private _dataBus: DataBusService) {
    this.defaultImgUrl = defaultImages.restaurent;
  }

  ngOnInit() {
  }

  getCusines( cusines ) {
    return cusines.split(',');
  }

  

}
