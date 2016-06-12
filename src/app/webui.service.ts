import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
//http://stackoverflow.com/questions/36947748/angular-2-beta-17-property-map-does-not-exist-on-type-observableresponse
import 'rxjs/add/operator/map';
//http://stackoverflow.com/questions/37073705/property-catch-does-not-exist-on-type-observableany
import 'rxjs/add/operator/catch';

import { shortDetails, geoLocation } from './hotel-web.interface';
import { urls } from './hotel-web.static.class';

@Injectable()
export class WebuiService {

  constructor (private http: Http) {}

  nearestRestaurants (latLon: geoLocation): any {
    return this.http.get(urls.nearbyRestUrl(latLon))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
