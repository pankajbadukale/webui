// just an interface for type safety.

export * from 'angular2-google-maps/services/google-maps-types';

export interface geoLocation {
  lat: number,
  lng: number
}

export interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  isCenter?: boolean,
  rest_header_title?: string
}

export interface shortDetails {
    rest_short_details_id: number,
    rest_header_title: string,
    lat: number,
    lng: number,
    distance: number,
    rest_address: string,
    rest_known_for?: string,
    rest_header_image?: string,
    cusine?: string
}

export interface fullDatails {
    rest_short_details_id: number,
    rest_header_title: string,
    rest_header_image?: string,
    rest_address?: string,
    rest_known_for?: string,
    cusines?: string,
    lat?: number,
    lng?: number,
    rest_contact?: string,
    timetable?: any,
    highlights?: string,
    cost_tooltip?: any,
    payment?: string,
    seo?: string
}