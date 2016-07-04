import { Component, OnInit, TemplateRef, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, NgClass, FOLDER, CDomNode } from '../framework';
import { GoogleMapComponent } from '../gmap';
import { HotelListComponent, HotelDetailsComponent } from './shared';
import { HotelService } from './hotel.service';
import { DataBusService, defaultImages } from '../util';


@Component({
  moduleId: module.id,
  selector: CDomNode.hotel,
  templateUrl: FOLDER.TEMPLATE(),
  directives: [GoogleMapComponent, HotelListComponent, HotelDetailsComponent, NgClass, ROUTER_DIRECTIVES],
  providers: [defaultImages]
})
export class HotelComponent implements OnInit {
  public static path: string = '/';

  constructor( private _hService: HotelService, private _dataBus: DataBusService) {
      //get getLocation
      //
      this._hService.nearestRestaurants(this._dataBus.myLocation).subscribe( result => {
        this._dataBus.addMarkers(result);
      });
  }

  ngOnInit() {
  }

}
