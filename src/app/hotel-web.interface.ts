// just an interface for type safety.

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