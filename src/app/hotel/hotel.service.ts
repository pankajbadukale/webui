import { Injectable, Http, Response, Observable } from '../framework';
//http://stackoverflow.com/questions/36947748/angular-2-beta-17-property-map-does-not-exist-on-type-observableresponse
import 'rxjs/add/operator/map';
//http://stackoverflow.com/questions/37073705/property-catch-does-not-exist-on-type-observableany
import 'rxjs/add/operator/catch';

import { shortDetails, geoLocation, urls } from '../util';

@Injectable()
export class HotelService {

  constructor (private http: Http) {}

  getRestauretnInfo() {// for just keep parameter null
    return this.http.get(urls.restInfo())
                    .map(this.extractRestInfo)
                    .catch(this.handleError);
  }

  nearestRestaurants (latLon: geoLocation): any {
    return this.http.get(urls.nearbyRestUrl(latLon))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractRestInfo( data: Response ) {
    let body = data.json()[0];
    /*body.cost_tooltip = JSON.parse(body.cost_tooltip);
    body.highlights = body.highlights.split(",");
    body.payment = body.payment.split(",");
    body.rest_contact = body.rest_contact.split(",");
    body.seo = body.seo.split(",");
    body.timetable = JSON.parse(body.timetable);*/
    

    return body || { };   
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
