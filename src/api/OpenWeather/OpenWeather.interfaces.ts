export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
}

export interface Clouds {
  all: number;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface OpenWeather {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}


export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  seaLevel: number;
  grndLevel: number;
  humidity: number;
  tempKf: number;
}

export interface Rain {
  _3h: number;
}

export interface Sys {
  pod: string;
}


export type WeatherMain = "Rain" | "Clouds" | "Clear" | "Thunderstorm" | "Drizzle" | "Snow" | "Atmosphere";

export interface Weather {
  id: number;
  main: WeatherMain;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
