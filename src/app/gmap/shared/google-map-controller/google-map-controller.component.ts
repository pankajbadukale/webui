import { Component, OnInit, GoogleMapsAPIWrapper } from '../../../framework';
import { LatLngLiteral, MarkerOptions, InfoWindowOptions, DataBusService } from '../../../util';

@Component({
  moduleId: module.id,
  selector: 'app-google-map-controller',
  templateUrl: 'google-map-controller.component.html'
})
export class GoogleMapControllerComponent implements OnInit {

    public centerLocationMarker: MarkerOptions;
    public centerLocationInfoWin: InfoWindowOptions;

    constructor(private _wrapper: GoogleMapsAPIWrapper, private _dataBus: DataBusService) {
        this._dataBus.centerChange.subscribe((centerLatLng: LatLngLiteral) => {
            this.centerLocationMarker = {
                position: centerLatLng,
                title: 'ME',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
            };
            this.centerLocationInfoWin = {
                position: centerLatLng,
                content: 'ME'
            };
            this._wrapper.createMarker(this.centerLocationMarker);
            this._wrapper.createInfoWindow(this.centerLocationInfoWin);
        });
    }

    ngOnInit() {
        console.log("initnt message");
    }
}
