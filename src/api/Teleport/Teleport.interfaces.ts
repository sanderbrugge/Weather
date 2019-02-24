export interface CityAdmin1Division {
  href: string;
  name: string;
}

export interface CityAlternateNames {
  href: string;
}

export interface CityCountry {
  href: string;
  name: string;
}

export interface CityTimezone {
  href: string;
  name: string;
}

export interface Self {
  href: string;
}

export interface Links {
  'city:admin1_division': CityAdmin1Division;
  'city:alternate-names': CityAlternateNames;
  'city:country': CityCountry;
  'city:timezone': CityTimezone;
  self: Self;
}

export interface Latlon {
  latitude: number;
  longitude: number;
}

export interface Location {
  geohash: string;
  latlon: Latlon;
}

export interface LocationNearestCity2 {
  _links: Links;
  full_name: string;
  geoname_id: number;
  location: Location;
  name: string;
  population: number;
}

export interface Embedded2 {
  'location:nearest-city': LocationNearestCity2;
}

export interface LocationNearestCity3 {
  href: string;
  name: string;
}

export interface Links2 {
  'location:nearest-city': LocationNearestCity3;
}

export interface LocationNearestCity {
  _embedded: Embedded2;
  _links: Links2;
  distance_km: number;
}

export interface Embedded {
  'location:nearest-cities': LocationNearestCity[];
  'location:nearest-urban-areas': any[];
}

export interface Cury {
  href: string;
  name: string;
  templated: boolean;
}

export interface Self2 {
  href: string;
}

export interface Links3 {
  curies: Cury[];
  self: Self2;
}

export interface Latlon2 {
  latitude: number;
  longitude: number;
}

export interface Coordinates {
  geohash: string;
  latlon: Latlon2;
}

export interface RootObject {
  _embedded: Embedded;
  _links: Links3;
  coordinates: Coordinates;
}

