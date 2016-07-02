import { Component, OnInit, NgIf } from '../../framework';

import { HotelBusService } from '../../hotel-bus.service';


@Component({
  moduleId: module.id,
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  directives: [NgIf]
})
export class OverviewComponent implements OnInit {
  public data: any;
  public showit: boolean;

  public timer: any;

  constructor(private _hbs: HotelBusService) {
    this.data = {};
    this.showit = false;
  }
  ngOnInit() {
    this.timer = setTimeout(() => {
      this.showit === true ? this.timer.clearTimeout() : this.checkUpdate(); 
    }, 3000);
  }

  checkUpdate() {
    this._hbs.currentHotelSelected
  }
}
