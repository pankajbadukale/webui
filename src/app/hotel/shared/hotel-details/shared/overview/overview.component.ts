import { Component, OnInit, NgIf } from '../../../../../framework';
import { DataBusService } from '../../../../../util';


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

  constructor(private _dataBus: DataBusService) {
    this.data = {};
    this.showit = false;
  }
  ngOnInit() {
    this.timer = setTimeout(() => {
      this.showit === true ? this.timer.clearTimeout() : this.checkUpdate(); 
    }, 3000);
  }

  checkUpdate() {
  }
}
