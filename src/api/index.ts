import { OpenWeatherToken } from "../Config";

export const BASE_OPENWEATHER_API = "http://api.openweathermap.org";

type StringDictionary = { [x: string]: string };

export enum METHODS {
  GET = "GET",
  POST = "POST"
}

export enum CONTENT_TYPE {
  JSON = "application/json",
}

interface CustomRequestInit extends RequestInit {
  method?: METHODS;
  headers?: StringDictionary;
}

const DEFAULT_OPTIONS: CustomRequestInit = {
  method: METHODS.GET,
  headers: {
    Accept: CONTENT_TYPE.JSON,
    "Content-Type": CONTENT_TYPE.JSON
  }
};

export function createOpenWeatherRequest(endpoint: string): Promise<any> {
  const url = `${BASE_OPENWEATHER_API}/${endpoint}&APPID=${OpenWeatherToken}`;
  console.log(url);
  return fetch(url, {...DEFAULT_OPTIONS}).then(response => response.json());
}