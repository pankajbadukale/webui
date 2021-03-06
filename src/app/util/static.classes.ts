import { geoLocation } from './data-types';

export class defaultImages {
  public static restaurent: string = "vendor/api/market.svg";
}

export class urls {
  public static baseUrl: string = "";
  public static restaurentUrl: string = "";
  public static defaultMeterDistance = 1000;

  public static nearbyRestUrl(latLng: geoLocation): string {
    //let reqURL = `${this.baseUrl}getLocations/${latLng.lat}/${latLng.lng}/${this.defaultMeterDistance}`;
    let reqURL = `http://localhost:4200/vendor/api/rest__details.json`;
    return reqURL;
  }

  public static restInfo() {
    //return "http://localhost:8080/api/restaurant/getRestaurentInfo";
    return `http://localhost:4200/vendor/api/rest_full_details.json`;
  }
}